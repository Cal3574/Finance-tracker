"use client";

import { FC } from "react";
import { signOut, signIn } from "next-auth/react";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  return (
    <>
      <div>
        <p>Signed in as</p>
        <button
          className="text-2xl px-4 bg-teal-300"
          onClick={() => signIn("google")}
        >
          LOGIN
        </button>
        <button className="text-2xl px-4 bg-teal-300" onClick={() => signOut()}>
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default Button;
