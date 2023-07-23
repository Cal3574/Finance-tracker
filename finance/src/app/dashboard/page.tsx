import RecentSpends from "../components/recentSpends/RecentSpends";
import StatsContainer from "../components/stats/StatsContainer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { returnAllUserSpends } from "../serverActions/returnAllUserSpends";
import MonthlySpendsGraph from "../components/graphs/MonthlySpendsGraph";
import { CategoryProps } from "../components/inputs/Input";
import { returnAllCategories } from "../serverActions/returnAllCategories";
interface pageProps {}

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  const allUserSpends = await returnAllUserSpends(
    session?.user.id,
    session?.user.token
  );

  const categories: CategoryProps[] = await returnAllCategories();

  if (!allUserSpends) {
    return new Response(
      JSON.stringify({
        error: "Not Authorized",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    return (
      <div className="flex flex-wrap mx-auto justify-center pb-[100px] inset-x-0 mt-4">
        <RecentSpends userSpends={allUserSpends ? allUserSpends : undefined} />
        <MonthlySpendsGraph
          userSpends={allUserSpends ? allUserSpends : undefined}
          session={session}
          categories={categories}
        />
        <StatsContainer />
      </div>
    );
  }
};

export default page;
