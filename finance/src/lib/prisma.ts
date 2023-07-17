import { env } from "process";

import { PrismaClient } from "@prisma/client";
/*
As per the Prisma docs: https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
Create a single instance of the Prisma Client and re-use it across the application

In development, the command next dev clears Node.js cache on run. This in turn initializes a new 
PrismaClient instance each time due to hot reloading that creates a connection to the database.
This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.
*/

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: ['query'],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
