"use client";

import { FC, useEffect, useState } from "react";
import TransactionCard from "../transactionCards/TransactionCard";
import { useSession } from "next-auth/react";
interface RecentSpendsProps {}

const RecentSpends: FC<RecentSpendsProps> = ({}) => {
  const { data: session, status } = useSession();
  const [transactions, setTransactions] = useState([]) as any[];

  const fetchUserTransactions = async () => {
    try {
      const res = await fetch(`/api/spendings/${session?.user?.id}`, {
        method: "GET",
        headers: {
          Authorization: `${session?.user?.token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user transactions");
      }

      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching user transactions:", error);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchUserTransactions();
    }
  }, [session?.user?.id]);

  return (
    <div className="bg-[#2D325A] rounded-xl h-80 w-[32rem] m-4 flex flex-col">
      <div>
        <h1 className="text-2xl text-start m-2 p-4">Recent Transactions</h1>
      </div>
      <div className="overflow-y-scroll">
        <div className="flex flex-col w-full gap-4 mb-5">
          {transactions &&
            transactions?.map((transaction: any) => (
              <TransactionCard
                key={transaction.id}
                amount={transaction.amount}
                category={transaction.category}
                date={transaction.createdAt}
                location={transaction.location}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentSpends;
