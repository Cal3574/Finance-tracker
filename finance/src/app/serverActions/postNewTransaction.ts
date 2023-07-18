"use server";

import { authOptions } from "@/lib/auth";
import { verifyJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function postNewTransaction(spendTransaction: any) {
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

  const newTransaction = await prisma.spendings.create({
    data: {
      location: spendTransaction.location,
      amount: parseInt(spendTransaction.amount),
      categoryId: parseInt(spendTransaction.category),
      userId: session?.user?.id as number,
    },
  });

  console.log(newTransaction);
  return newTransaction;
}
