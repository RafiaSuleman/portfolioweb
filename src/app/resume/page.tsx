"use client";
import { Description } from "@radix-ui/react-dialog";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { delay, motion } from "framer-motion";

const about = {
  title: "About me",
   
  info: [
    {
      fildName: "Name: ",
      fieldValue: "Rafia Khurshid",
    },
    {
      fildName: "Phone: ",
      fieldValue: "+92 323 4533030",
    },
    {
      fildName: "Experience: ",
      fieldValue: "1 Year",
    },
    {
      fildName: "Skype: ",
      fieldValue: "Rafia.00",
    },
    {
      fildName: "Nationality: ",
      fieldValue: "Pakistani",
    },
    {
      fildName: "Email:",
      fieldValue: "rafiakhurshid00@gmail.com",
    },
    {
      fildName: "Language:",
      fieldValue: "English,Urdu",
    },
  ],
};

const experiance = {
  icon: "/asserts/resume/badge.svg ",
  title: "My experiance",
  Description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, ex.",
  items: [
    {
      company: "Tech Solution Inc. ",
      position: "Full stack Developer ",
      duration: "2022-present",
    },
    {
      company: "Web Design Studio. ",
      position: "Front-End Developer Intern",
      duration: "summer-2021",
    },
    {
      company: "E-commerance Startup ",
      position: "Freelance Web Developer",
      duration: "2020-2021",
    },
    {
      company: "E-commerance Startup ",
      position: "Freelance Web Developer",
      duration: "2020-2021",
    },
    {
      company: "E-commerance Startup ",
      position: "Freelance Web Developer",
      duration: "2020-2021",
    },
    {
      company: "E-commerance Startup ",
      position: "Freelance Web Developer",
      duration: "2020-2021",
    },
    {
      company: "E-commerance Startup ",
      position: "Freelance Web Developer",
      duration: "2020-2021",
    },
  ],
};

const education = {
  icon: "/asserts/resume/cap.svg ",
  title: "My Education",
 
  items: [
    {
      institute: "Online Course from Webkin Solutions",
      degree: "Full stack Web Development ",
      duration: "2024",
    },
    {
      institute: "Online Course ",
      degree: "React Web Development ",
      duration: "2024",
    },
    {
      institute: "LCWU ",
      degree: "BSCS",
      duration: "2013-2017",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillset: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
   
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[200px] max-auto xl:mx-0 gap-6 ">
          {/*   <TabsTrigger value="experiance">Experience</TabsTrigger> */}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
         <div className="min-h-[70vh] w-full">
             {/* <TabsContent value="experiance">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiance.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{experiance.Description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiance.items.map((item,index)=>{
                      return <li key={index} className="bg-[#063E2A] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-color">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg:text-left">{item.position}</h3>
                          <div className="flex-items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-color"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> */}

            {/* Education */}
            <TabsContent value="education">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{education.Description}</p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return <li key={index} className="bg-white/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-black bg-white px-3 py-1 rounded-lg">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg:text-left">{item.institute}</h3>
                          <div className="flex-items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-color"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                 <p className="max-w-[600px] text-white/50  rounded-xl mx-auto xl:mx-0">{skills.description}</p> 
                    <ul className="grid grid-cols-2 sm-grid-cols-3 md-grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillset.map((item,index)=>{
                      return <li key={index} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-white/30 rounded-xl flex justify-center items-center group">
                          <div className="text-white text-6xl hover:text-color transition-all duration-300">{item.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                          <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                          </Tooltip>
                          </TooltipProvider>
                      </li>
                    })}
                    </ul>
              </div>
            </TabsContent>

            {/* about us */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-xl font-bold gap-5"> {about.title} </h3>
                      {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p> */}
                      <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">  
                        {about.info.map((item,index)=>{
                          return <li key={index}>
                              <span className="text-white/60">{item.fildName}</span>
                              <span className="text-xl">{item.fieldValue}</span>

                          </li>
                        })}
                      </ul>
                  </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
