// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),

//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.SECRET,
//   callbacks: {
//     async jwt({ token, trigger, session }) {
//       if (trigger === "update" && session?.user) {
//         token.user = session.user;
//       }
//       return token;
//     },
//   },

//   pages: {
//     signIn: "/login",
//   },

//   session: {
//     strategy: "jwt",
//   },
//   debug: process.env.NODE_ENV === "development",
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
