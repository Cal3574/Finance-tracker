import { FC } from "react";

interface InputProps {}

const Input: FC<InputProps> = ({}) => {
  return (
    <div className="flex gap-4">
      <input
        type="number"
        placeholder="Type here"
        className="input w-full max-w-xs border border-black"
      />
      <button className="btn ">Submit</button>
    </div>
  );
};

export default Input;
