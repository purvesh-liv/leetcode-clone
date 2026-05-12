import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SignInButton,SignUpButton,UserButton,Show } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { UserRole } from "@/lib/generated/prisma/enums";


const Navbar = ({userRole}:any) => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-200 hover:bg-white/15 dark:hover:bg-black/15">
        <div className="px-6 py-4 items-center justify-between flex ">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="logo" width={42} height={42}></Image>
            <span className="font-bold text-2xl tracking-widest text-amber-300">
              Leetcode
            </span>
          </Link>

          <div className="flex flex-row items-center justify-center gap-x-4">
            <Link
              href="/problems"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400  hover:text-amber-600 cursor-pointer dark:hover:text-amber-400"
            >
              Problems
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400  hover:text-amber-600 cursor-pointer dark:hover:text-amber-400"
            >
              About
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400  hover:text-amber-600 cursor-pointer dark:hover:text-amber-400"
            >
              Profile
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* // theme toggle */}
            <Show when={"signed-in"}>
              {
                userRole && userRole === UserRole.ADMIN && (
                  <Link href={"/create-problem"}>
                    <Button variant={"outline"}>
                      Create Problem
                    </Button>
                  </Link>
                )
              }
              <UserButton />
            </Show>

              <Show when="signed-out">
                <SignInButton />
                <SignUpButton>
                  <Button className=" rounded-md  font-medium bg-amber-400 hover:bg-amber-500 text-white text-sm cursor-pointer">
                    Sign Up
                  </Button>
                </SignUpButton>
              
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar