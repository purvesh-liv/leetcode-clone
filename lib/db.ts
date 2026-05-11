import { PrismaClient } from "./generated/prisma/client";
import {PrismaPg} from "@prisma/adapter-pg"

//global prisma
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined 
}
                       // if gloabal prisma exists use that or ....
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    adapter:new PrismaPg({connectionString:process.env.DATABASE_URL})



})
// if its not in production
if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma
}