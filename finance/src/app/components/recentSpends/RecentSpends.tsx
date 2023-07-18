"use client";
import { useSession } from "next-auth/react";
import { returnAllUserSpends } from "@/app/serverActions/returnAllUserSpends";
import { useEffect, useState } from "react";
import TransactionCard from "../transactionCards/TransactionCard";
interface RecentSpendsProps {
  userSpends: any;
}

const RecentSpends = ({ userSpends }: RecentSpendsProps) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }
  return (
    <div className="bg-[#2D325A] rounded-xl h-80 md:w-[32rem] w-full m-4 flex flex-col">
      <div>
        <h1 className="text-2xl text-start m-2 p-4">Recent Transactions</h1>
      </div>
      <div className="overflow-y-scroll">
        <div className="flex flex-col w-full gap-4 mb-5">
          <div className="ml-4"></div>
          {userSpends &&
            userSpends
              .sort((a: any, b: any) => b.id - a.id)
              .map((transaction: any) => (
                <TransactionCard
                  key={transaction.id}
                  amount={transaction.amount}
                  category={transaction.category}
                  date={transaction.createdAt}
                  location={transaction.location}
                />
              ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default RecentSpends;
