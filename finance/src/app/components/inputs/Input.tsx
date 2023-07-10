import { FC } from "react";
import { prisma } from "../../../../db";
import { returnAllCategories } from "@/utils/returnAllCategories";

interface InputProps {}

const Input: FC<InputProps> = async ({}) => {
  const categories = await returnAllCategories();
  return (
    <dialog id="my_modal_4" className="modal">
      <form
        method="dialog"
        className="modal-box w-11/12 max-w-5xl flex flex-col gap-8 justify-center items-center"
      >
        <h3 className="font-bold text-lg">New input!</h3>
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Amount"
          className="input input-bordered w-full max-w-xs"
        />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div className="modal-action">
          {/* if there is a button, it will close the modal */}

          <button className="btn btn-success">Submit</button>

          <button className="btn btn-error">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default Input;
