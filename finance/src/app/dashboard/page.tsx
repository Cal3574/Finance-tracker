import { NextPage } from "next";
import Input from "../components/inputs/Input";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { returnFirstName } from "@/utils/ReturnFirstName";
import { redirect } from "next/navigation";
import RecentSpends from "../components/recentSpends/RecentSpends";
import MonthlySpendingPieChart from "../components/monthlySpendingChart/MonthlySpendingPieChart";
import StatsContainer from "../components/stats/StatsContainer";

interface pageProps {}

const page: NextPage<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=%2Fdashboard");
  }

  return (
    <div className="min-h-screen flex flex-wrap w-[100vw] mx-auto justify-center pb-[100px] inset-x-0 mt-4">
      <RecentSpends />
      <MonthlySpendingPieChart />
      <StatsContainer />
      <MonthlySpendingPieChart />
      <StatsContainer />
      <RecentSpends />
    </div>
  );
};

export default page;
