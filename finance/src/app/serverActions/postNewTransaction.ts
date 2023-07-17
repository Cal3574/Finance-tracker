"use server";

import prisma from "@/lib/prisma";

export async function postNewTransaction(spendTransaction: any) {
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
