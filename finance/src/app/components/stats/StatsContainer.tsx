import { FC } from "react";
import StatCard from "./StatCard";

interface StatsContainerProps {}

const StatsContainer: FC<StatsContainerProps> = ({}) => {
  return (
    <div className=" flex flex-col h-80 md:w-[32rem] w-full m-4 gap-4">
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
};

export default StatsContainer;
