"use server";
import prisma from "../../lib/prisma";

export async function returnAllCategories() {
  const allCategories = await prisma.categories.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return allCategories;
}
