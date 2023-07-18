"use client";

import { postNewTransaction } from "@/app/serverActions/postNewTransaction";
import { returnAllCategories } from "@/app/serverActions/returnAllCategories";
import { Dialog, Transition } from "@headlessui/react";
import {
  Fragment,
  startTransition,
  useEffect,
  useState,
  useTransition,
} from "react";

interface InputProps {
  isModalOpen: boolean;
  setIsModelOpen: (value: boolean) => void;
}

interface CategoryProps {
  id: number;
  name: string;
}

interface SpendProps {
  location: string;
  amount: number;
  category: number;
  userId: any;
}

export default async function AddNewInput({}: InputProps) {
  // const { userEmail, userId, userName } = useUserSession();

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [spendInput, setSpendInput] = useState<SpendProps>({
    location: "",
    amount: 0,
    category: 0,
    userId: 1,
  });

  const getCategories = async () => {
    const categories: CategoryProps[] = await returnAllCategories();
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={async () =>
                  startTransition(() => {
                    postNewTransaction(spendInput);
                  })
                }
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
