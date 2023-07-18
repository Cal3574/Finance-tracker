"use client";

import { FC } from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  const { data: session } = useSession();

  console.log(session?.user, "testing");
  if (session && session.user) {
    return (
      <div>
        <p>Hi {session.user.name}</p>
        <button className="bg-red-200" onClick={() => signOut()}>
          SIGN OUT
        </button>
      </div>
    );
  } else
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
