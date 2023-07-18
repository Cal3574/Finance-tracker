import { NextPage } from "next";
import RecentSpends from "../components/recentSpends/RecentSpends";
import StatsContainer from "../components/stats/StatsContainer";
import prisma from "../../lib/prisma";
import { verifyJwtAccessToken } from "@/lib/jwt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { returnAllUserSpends } from "../serverActions/returnAllUserSpends";
interface pageProps {}

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  const allUserSpends = await returnAllUserSpends(
    session?.user.id,
    session?.user.token
  );

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
      <div className="min-h-screen flex flex-wrap mx-auto justify-center pb-[100px] inset-x-0 mt-4">
        <RecentSpends userSpends={allUserSpends ? allUserSpends : undefined} />
        <StatsContainer />
      </div>
    );
  }
};

export default page;
