"use client";

import useUserSession from "@/app/hooks/getUserSession";
import { useSpendCategories } from "@/app/hooks/useSpendCategories";
import { postNewTransaction } from "@/app/serverActions/postNewTransaction";
import { returnAllCategories } from "@/app/serverActions/returnAllCategories";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import {
  Fragment,
  startTransition,
  use,
  useEffect,
  useState,
  useTransition,
} from "react";

interface InputProps {
  userId: any;
  postNewSpend?: any;
}

export interface CategoryProps {
  id: number;
  name: string;
}

interface SpendProps {
  location: string;
  amount: number;
  category: number;
}

export default function AddNewInput({ userId, postNewSpend }: InputProps) {
  const [spendInput, setSpendInput] = useState<SpendProps>({
    location: "",
    amount: 0,
    category: 0,
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const { categories } = useSpendCategories();

  console.log(categories);

  if (!userId) {
    return null;
  }

  const handleUserInput = (e: any) => {
    const { name, value } = e.target;
    setSpendInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <form className="mt-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Where did you spend?</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleUserInput}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">How much?</span>
              </label>
              <input
                name="amount"
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={handleUserInput}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Type of transaction?</span>
              </label>
              <select
                className="select select-bordered"
                name="category"
                onChange={handleUserInput}
              >
                <option disabled selected>
                  Pick one
                </option>
                {categories.map((category: CategoryProps, i: number) => (
                  <option key={i} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <button
                type="reset"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={async (e) => {
                  e.preventDefault();
                  await postNewSpend(spendInput);
                  router.refresh();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
}

// const categories = await returnAllCategories();
