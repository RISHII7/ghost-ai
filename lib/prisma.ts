import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL ?? "";

  if (connectionString.startsWith("prisma+postgres://")) {
    // Use Accelerate (direct connection, no driver adapter)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new PrismaClient({} as any);
  }

  // Use direct pg driver adapter
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
