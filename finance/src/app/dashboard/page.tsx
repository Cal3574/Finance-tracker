import { NextPage } from "next";
import Input from "../components/inputs/Input";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { returnFirstName } from "@/utils/ReturnFirstName";

interface pageProps {}

const page: NextPage<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    return <div>loading...</div>;
  }

  return (
    <div className="h-screen">
      <div className="flex mt-10 text-slate-200 flex-col items-center mx-auto md:mx-10 md:items-start">
        <div className="">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Good Morning, {returnFirstName(session?.user?.name)}
          </h1>
        </div>
        <p className="text-sm mt-1">Welcome back, nice to see you again!</p>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow flex flex-col md:flex-row justify-center mx-auto ml-10 mr-10 mt-10">
        <div className="stat">
          <div className="stat-title">Savings</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Spending&apos;s</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Remaining Spends</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-24 items-center">
        <div className="mt-10">
          <Input />
        </div>
        <div className="flex justify-center items-center flex-col mt-10">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl underline text-slate-200 mb-4">
            Spending report
          </h1>
          <div className="flex-col text-md ">
            <p>hey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
