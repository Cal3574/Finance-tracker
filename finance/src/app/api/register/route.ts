import { prisma } from "../../../../db";
import * as bycrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bycrypt.hash(body.password, 10),
    },
  });

  if (user) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
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
