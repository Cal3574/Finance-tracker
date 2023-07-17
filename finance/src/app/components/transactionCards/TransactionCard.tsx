import { returnDate } from "@/utils/returnDate";
import { returnTime } from "@/utils/returnTime";
import { FC } from "react";
import { IoCafeOutline } from "react-icons/io5";
interface TransactionCardProps {
  amount: number;
  category: string;
  date: string;
  location: string;
}

const TransactionCard: FC<TransactionCardProps> = ({
  amount,
  category,
  date,
  location,
}) => {
  return (
    <div className="bg-[#1f213f] w-4/5 h-20 rounded-r-full relative shadow-2xl">
      <div className="absolute flex items-center  ml-4 left-0 mt-auto mb-auto top-0 bottom-0">
        <IoCafeOutline size={40} />
      </div>
      <div className="text-white flex flex-col items-center justify-center h-full ">
        <p className="text-lg text-red-400">-£{amount}</p>
        <p className="text-sm">{location}</p>
        <p className="text-[10px] text-slate-400">{category}</p>
      </div>

      <div className="text-[10px] flex flex-col justify-center gap-2 items-center mr-4 absolute right-0 mt-auto mb-auto top-0 bottom-0 ">
        {/* <p>{returnDate(date)}</p>
        <p>{returnTime(date)}</p> */}
      </div>
    </div>
  );
};

export default TransactionCard;
