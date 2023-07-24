"use server";

import { authOptions } from "@/lib/auth";
import { verifyJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function deleteSpend(spendId: any) {
  console.log("spendId", spendId);
  const session = await getServerSession(authOptions);
  if (!session?.user.token || !verifyJwtAccessToken(session.user.token)) {
    return new Response(
      JSON.stringify({
        error: "Not Authorized",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const deletedSpend = await prisma.spendings.delete({
    where: {
      id: spendId,
    },
  });

  revalidatePath("/dashboard");

  return deletedSpend;
}
