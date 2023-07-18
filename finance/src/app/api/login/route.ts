import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bycrypt from "bcrypt";
interface RequestBody {
  email: string;
  password: string;
  token?: string;
}

interface UserProps {}

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;

  const user: any = await prisma.user.findUnique({
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

    return new Response(JSON.stringify(result));
  } else {
    console.log("Invalid email or password");
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
