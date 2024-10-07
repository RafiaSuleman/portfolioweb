'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    
    SheetTrigger,
  } from "@/components/ui/sheet"
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name:'home',
        path:'/'
    },
   
    {
        name:'Resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work',
    },
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
           <CiMenuFries className="text-[32px] text-color"/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mb-[60px] text-center text-2xl'>
                <Link href='/'>
                <h1 className='text-4xl font-semibold'>Rafia<span className='text-color'>.</span></h1>
                </Link>
            </div> 
            <nav  className='flex flex-col justify-center items-center gap-8'>
                {links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index} className={`${link.path===pathname &&" border-b-2 bg-color border-color"} "text-xl capitalize hover:text-color transition-all`}>
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
