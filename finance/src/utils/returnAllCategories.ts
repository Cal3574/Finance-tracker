import { prisma } from "../../db";

export async function returnAllCategories() {
  const categories = await prisma.categories.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  console.log(categories);
  return categories;
}
