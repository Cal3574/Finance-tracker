import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Button from "../components/buttons/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface pageProps {}

const page: NextPage<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex justify-center p-10">
      <Button />
    </div>
  );
};

export default page;
