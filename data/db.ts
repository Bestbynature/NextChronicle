import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
    Prisma: PrismaClient | undefined;
}

export const prisma = globalForPrisma.Prisma ?? 
new PrismaClient({
    log: ["query"],
});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.Prisma = prisma;
}