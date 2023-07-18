"use client";

import { postNewTransaction } from "@/app/serverActions/postNewTransaction";
import { returnAllCategories } from "@/app/serverActions/returnAllCategories";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useTransition } from "react";

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

export default async function AddNewInput({
  isModalOpen,
  setIsModelOpen,
}: InputProps) {
  // const { userEmail, userId, userName } = useUserSession();

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [spendInput, setSpendInput] = useState<SpendProps>({
    location: "",
    amount: 0,
    category: 0,
    userId: 1,
  });
  let [isPending, startTransition] = useTransition();

  // const getCategories = async () => {
  //   const categories: CategoryProps[] = await returnAllCategories();
  //   setCategories(categories);
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  const handleUserInput = (e: any) => {
    const { name, value } = e.target;
    setSpendInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Transition appear show={isModalOpen ? isModalOpen : false} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModelOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Input new transaction
                  </Dialog.Title>
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
                      {/* <select
                        className="select select-bordered"
                        name="category"
                        onChange={handleUserInput}
                      >
                        <option disabled selected>
                          Pick one
                        </option>
                        {categories.map(
                          (category: CategoryProps, i: number) => (
                            <option key={i} value={category.id}>
                              {category.name}
                            </option>
                          )
                        )}
                      </select> */}
                    </div>
                    <div className="mt-4">
                      {/* <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={async () =>
                          startTransition(() => {
                            postNewTransaction(spendInput);
                          })
                        }
                      > */}
                      {/* Submit */}
                      {/* </button> */}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// const categories = await returnAllCategories();
