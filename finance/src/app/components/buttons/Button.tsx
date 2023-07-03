"use client";

import { FC } from "react";
import { signOut, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  return (
    <>
      <div>
        <GoogleButton onClick={() => signIn("google")}>LOGIN</GoogleButton>
        <button className="bg-red-200" onClick={() => signOut()}>
          SIGN OUT
        </button>
      </div>
    </>
  );
};

export default Button;
