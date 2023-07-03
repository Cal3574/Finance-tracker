import { prisma } from "../../../../../db";
import { verifyJwtAccessToken } from "@/lib/jwt";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwtAccessToken(accessToken)) {
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
    const allUserSpends = await prisma.spendings.findMany({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(JSON.stringify(allUserSpends));
  }
}