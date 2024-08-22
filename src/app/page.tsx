import Image from "next/image";
import Contact from "./contact/page";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/ui/social";
import Photo from "@/components/ui/photo";
import Stats from "@/components/ui/stats";
export default function Home() {
  return (
    <section className="h-screen">
      <div className="container mx-auto h-full mb-[20px]">
        <div className="flex flex-col xl:flex-row item-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none" >
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">Hello I'm  <br /> <span className="text-[#01FCA4]">Rafia Khurshid</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 flex justify-center items-center ">with in-depth knowledge of SEO best practices, I specialize in
          creating sites that are not only visually appealing but also rank well
          in search engines.</p>
          <div className="flex flex-col xl:flex-row">
            <Button variant="outline"
            size='lg'
            className="uppercase flex items-center"  >
              <span> Download CV</span>
              <FiDownload className="text-xl "/>
            </Button>
          <div className="mt-6 xl:mt-0 ml-[10px] flex justify-center items-center">
            <Social containerStyles=" flex gap-6" iconStyles="w-9 h-9 border border-[#01FCA4] rounded-full flex justify-center items-center text-[#01FCA4] text-base hover:bg-[#01FCA4] hover:text-primary hover:transition-all duration-500"/>
          </div>
          </div>
          </div>
          <div className="h-full w-full xl:order-none mb-8 xl:mb-0 flex justify-center items-center ">
              <Photo/>
          </div>
        </div>
        <Stats/>
      </div>
      
    </section>
  );
}
