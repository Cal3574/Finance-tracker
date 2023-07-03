import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Button from "../components/buttons/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface pageProps {}

const page: NextPage<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex items-center p-10 h-screen flex-col gap-4">
      <div>
        <h1 className="text-4xl text-slate-200">Sign In</h1>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default page;
