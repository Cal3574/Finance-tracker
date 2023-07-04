import { FC } from "react";
import { IoCafeOutline } from "react-icons/io5";
interface TransactionCardProps {}

const TransactionCard: FC<TransactionCardProps> = ({}) => {
  return (
    <div className="bg-[#1f213f] w-4/5 h-20 rounded-r-full relative shadow-2xl">
      <div className="absolute flex items-center  ml-4 left-0 mt-auto mb-auto top-0 bottom-0">
        <IoCafeOutline size={40} />
      </div>
      <div className="text-white flex flex-col items-center justify-center h-full ">
        <p className="text-lg text-red-400">-£3.50</p>
        <p className="text-sm">Starbucks</p>
        <p className="text-[10px] text-slate-400">Food</p>
      </div>

      <div className="text-[10px] flex items-center mr-4 absolute right-0 mt-auto mb-auto top-0 bottom-0">
        <p>17:19</p>
      </div>
    </div>
  );
};

export default TransactionCard;
