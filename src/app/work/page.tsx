"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/ui/workSliderBtn";

const projects = [
  {
    num: "01",
    catagories: "E-Commerce",
    title: "CaseCobra",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, neque.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }, { name: "Prisma" }],
    image: "/assets/work/casecobra.png",
    live: "https://casecobra-2wik.vercel.app/",
    github: "",
  },
  {
    num: "02",
    catagories: "Frontend",
    title: "Serene BeautyPorlor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, neque.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }],
    image: "/assets/work/beautyporlor.jpg",
    live: "https://beautypolorapp.vercel.app/",
    github: "",
  },
 
  {
    num: "03",
    catagories: "E-Commerce",
    title: "nextCommerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, neque.",
    stack: [{ name: "Tailwindcss" }, { name: "nextjs" }, { name: "typeScript" },{ name: "Sanity" }],
    image: "/assets/work/ecommerce.jpg",
    live: "https://sunnygarments.vercel.app/",
    github: "",
  },
  {
    num: "04",
    catagories: "Frontend",
    title: "Qariapp",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, neque.",
    stack: [{ name: "Tailwindcss" }, { name: "nextjs" }, { name: "typeScript" }],
    image: "/assets/work/qariapp.jpg",
    live: "https://quranic-guide.vercel.app/",
    github: "",
  },
  {
    num: "05",
    catagories: "MDX Blog",
    title: "TechHives",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, neque.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }, { name: "MDX" }],
    image: "/assets/work/blogimage.jpg",
    live: "https://beautypolorapp.vercel.app/",
    github: "",
  },
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: any; }) =>{
    // get current slide index
    const currentIndex = swiper.activeIndex;
  
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:2.4,duration:0.4 , ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project cnum */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project catagory */}
              <h2 className="text-[30px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.catagories} project
              </h2>
              {/* description */}
              <p className="text-white/50">{project.description}</p>

              <ul className="flex gap-1">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex item-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full justify-center items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                        <TooltipContent>
                          <p>Github reposetory</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>
          <div className="mb-[20px] w-full xl:w-[50%] ">
      
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[440px] mb-[10]"
            onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return (
                  <SwiperSlide key={index} className="w-full bg-blue-500
                   ">
                      <div className="h-[400px] flex flex-col items-center justify-center  bg-green-500">
                         {/* <div className="absolute w-full h-full z-10 "></div>                      */}
                         
                          <Image src={project.image} 
                           height={500}
                           width={700}
                           className="object-cover"  
                           alt=""/>               
                      </div>
                  </SwiperSlide> 
                )
              })}
              {/* Slider Button */}
              <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
