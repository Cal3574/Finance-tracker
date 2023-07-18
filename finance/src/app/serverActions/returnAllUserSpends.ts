"use server";

import { verifyJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
export async function returnAllUserSpends(id: any, token: any) {
  if (!token || !verifyJwtAccessToken(token)) {
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

  const allUserSpends = await prisma.spendings.findMany({
    where: {
      userId: id,
    },
  });
  return allUserSpends;
}
