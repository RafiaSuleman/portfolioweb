'use client'
import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

const PageTransition =({childern})=>{
    const pathname = usePathname();
    return(
        <AnimatePresence> 
            <div key = {pathname}> 
                <Motion.div initial={{opacity:1}}
                animate={{opacity:0,
                    transition:{delay:1,duration:0.4,ease:"easeInOut"},
                }}
                className='h-screen w-screen fixed bg-primary top-8 pointer-events-none'
                />
            {childern}
            </div></AnimatePresence>
    )
}
export default PageTransition