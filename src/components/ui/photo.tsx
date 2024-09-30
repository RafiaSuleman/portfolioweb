"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* SVG Circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[550px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#EB70F1"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image Centered in Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <div className="relative w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten">
            <Image
              src="/Images/webdeveloper3.png"
              priority
              quality={100}
              fill
              className="object-contain"
              alt="Web Developer"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
