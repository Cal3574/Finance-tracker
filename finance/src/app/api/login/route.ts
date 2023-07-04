import { signJwtAccessToken } from "@/lib/jwt";
import { prisma } from "../../../../db";
import * as bycrypt from "bcrypt";
interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user && (await bycrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const token = signJwtAccessToken({
      userWithoutPass,
    });
    const result = {
      ...userWithoutPass,
      token,
    };

    console.log(result, " result");
    return new Response(JSON.stringify(result));
  } else {
    return new Response(
      JSON.stringify({
        error: "Invalid email or password",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
