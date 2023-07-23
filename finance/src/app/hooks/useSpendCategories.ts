"use client";

import { useEffect, useState } from "react";
import { returnAllCategories } from "../serverActions/returnAllCategories";
import { CategoryProps } from "../components/inputs/Input";

export function useSpendCategories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const getCategories = async () => {
    const categories: CategoryProps[] = await returnAllCategories();
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories };
}
