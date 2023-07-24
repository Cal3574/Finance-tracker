"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TransactionCard from "../transactionCards/TransactionCard";
import { monthNames } from "@/app/constants/dates";
import { useHandleMonth } from "@/app/hooks/useManageSpends";
import { useRouter } from "next/router";
import AddNewInput from "../inputs/Input";
interface RecentSpendsProps {
  userSpends: any;
  deletePost: any;
  postNewSpend: any;
}

const RecentSpends = ({
  userSpends,
  deletePost,
  postNewSpend,
}: RecentSpendsProps) => {
  const { data: session } = useSession();
  const {
    setSelectedMonth,
    selectedMonth,
    monthName,
    handleMonthChange,
    getMonthName,
    spends,
    setSpends,
  } = useHandleMonth({ userSpends });

  useEffect(() => {}, [userSpends]);

  if (!session) {
    return null;
  }

  return (
    <div className="bg-[#2D325A] rounded-xl h-80 md:w-[32rem] w-full m-4 flex flex-col">
      <AddNewInput userId={session?.user?.id} postNewSpend={postNewSpend} />

      <div className="flex items-center">
        <label
          htmlFor="my_modal_7"
          className="text-center flex items-center cursor-pointer"
        >
          Add New
        </label>
        <div>
          <h1 className="text-2xl text-start m-2 p-4">Recent Transactions</h1>
        </div>
        <div className="flex mx-auto">
          <select
            className="select select-bordered w-full max-w-xs"
            value={monthName}
            onChange={(e) => {
              handleMonthChange(e.target.value);
            }}
          >
            <option disabled selected>
              Select Month
            </option>
            {monthNames.map((month: string, i: number) => (
              <option key={i}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-y-scroll">
        <div className="flex flex-col w-full gap-4 mb-5">
          <div className="ml-4"></div>
          {spends.length ? (
            spends
              .sort((a: any, b: any) => b.id - a.id)
              .map((transaction: any) => (
                <TransactionCard
                  key={transaction.id}
                  amount={transaction.amount}
                  category={transaction.category}
                  date={transaction.createdAt}
                  location={transaction.location}
                  id={transaction.id}
                  deletePost={deletePost}
                />
              ))
          ) : (
            <h1 className="text-2xl text-center m-2 p-4">No Transactions</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentSpends;
