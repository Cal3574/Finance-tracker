"use client";

import { FC, useEffect, useState } from "react";
import TransactionCard from "../transactionCards/TransactionCard";
import { useSession } from "next-auth/react";
import { returnDate } from "@/utils/returnDate";
import { returnAllUserSpends } from "@/app/serverActions/returnAllUserSpends";
interface RecentSpendsProps {}

const RecentSpends: FC<RecentSpendsProps> = async ({}) => {
  const { data: session, status } = useSession();

  const userSpends = await returnAllUserSpends(
    session?.user?.id,
    session?.user?.token
  );

  console.log(userSpends);

  return (
    <div className="bg-[#2D325A] rounded-xl h-80 md:w-[32rem] w-full m-4 flex flex-col">
      <div>
        <h1 className="text-2xl text-start m-2 p-4">Recent Transactions</h1>
      </div>
      <div className="overflow-y-scroll">
        <div className="flex flex-col w-full gap-4 mb-5">
          <div className="ml-4"></div>
          {/* {transactions &&
            transactions.map((transaction: any) => (
              <TransactionCard
                key={transaction.id}
                amount={transaction.amount}
                category={transaction.category}
                date={transaction.createdAt}
                location={transaction.location}
              />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default RecentSpends;
