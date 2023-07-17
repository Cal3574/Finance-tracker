import { NextPage } from "next";
import RecentSpends from "../components/recentSpends/RecentSpends";
import StatsContainer from "../components/stats/StatsContainer";
interface pageProps {}

const page: NextPage<pageProps> = async ({}) => {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  // if (!session) {
  //   return redirect("/api/auth/signin?callbackUrl=%2Fdashboard");
  // }

  return (
    <div className="min-h-screen flex flex-wrap mx-auto justify-center pb-[100px] inset-x-0 mt-4">
      <RecentSpends />
      <StatsContainer />
      <StatsContainer />
      <RecentSpends />
    </div>
  );
};

export default page;
