'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import CiMenuFries from 'react-icons/ci'

const links = [
    {
        name:'home',
        path:'/'
    },
    {
        name:'Services',
        path:'/services'
    },
    {
        name:'Resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'contact',
        path:'/contact',
    }
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
           {/* <CiMenuFries className="text-[32px] text-[#01FCA4]"/> */}
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-40 text-center text-2xl'>
                <Link href='/'>
                <h1 className='text-4xl font-semibold'></h1>
                </Link>
            </div>
            <nav >
                {links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index} className={`${link.path===pathname &&" text-[#01FCA4] border-b-2 border-[#01FCA4]"} "text-xl capitalize hover:text-[]`}>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
