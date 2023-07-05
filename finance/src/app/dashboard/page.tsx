import { NextPage } from "next";
import Input from "../components/inputs/Input";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { returnFirstName } from "@/utils/ReturnFirstName";
import { redirect } from "next/navigation";
import RecentSpends from "../components/recentSpends/RecentSpends";
import MonthlySpendingPieChart from "../components/monthlySpendingChart/MonthlySpendingPieChart";

interface pageProps {}

const page: NextPage<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=%2Fdashboard");
  }

  return (
    <div className="h-screen flex flex-wrap gap-y-0">
      <RecentSpends />
      <MonthlySpendingPieChart />
    </div>
  );
};

export default page;
