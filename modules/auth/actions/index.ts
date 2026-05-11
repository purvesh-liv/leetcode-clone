"use server"

import { prisma } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"

export const onBoardUser = async()=>{
    try {
        const user = await currentUser();
        if(!user){
            return {
                success:false,
                error:"No authenticated user found"
            }
        }
        const {id,firstName,lastName,imageUrl,emailAddresses} = user

        const newuser = await prisma.user.upsert({
          where: {
            clerkId: id,
          },
          update: {
            clerkId: id,
            firstname: firstName || null,
            lastname: lastName || null,
            imageUrl: imageUrl || null,
            email: emailAddresses[0].emailAddress || "",
          },
          create: {
            clerkId: id,
            firstname: firstName || null,
            lastname: lastName || null,
            imageUrl: imageUrl || null,
            email: emailAddresses[0].emailAddress || "",
          },
        });
    } catch (error) {
        
    }
}