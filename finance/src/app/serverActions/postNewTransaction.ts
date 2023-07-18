"use server";

import { verifyJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function postNewTransaction(spendTransaction: any, token: any) {
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

  const newTransaction = await prisma.spendings.create({
    data: {
      location: spendTransaction.location,
      amount: spendTransaction.amount,
      categoryId: spendTransaction.categoryId,
      userId: spendTransaction.userId,
    },
  });
  return newTransaction;
}
