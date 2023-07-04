import { FC } from "react";
import TransactionCard from "../transactionCards/TransactionCard";

interface RecentSpendsProps {}

const RecentSpends: FC<RecentSpendsProps> = ({}) => {
  return (
    <div className="bg-[#2D325A] rounded-xl h-80 w-[32rem] m-4 flex flex-col">
      <div>
        <h1 className="text-2xl text-start m-2 p-4">Recent Transactions</h1>
      </div>
      <div className="overflow-scroll">
        <div className="flex flex-col w-full gap-4 mb-5">
          <TransactionCard />
          <TransactionCard />

          <TransactionCard />
        </div>
      </div>
    </div>
  );
};

export default RecentSpends;
