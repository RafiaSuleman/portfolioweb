import Image from "next/image";
import Contact from "./contact/contact";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className=" bg-[#201e43] text-[#EEEEEE] h-screen ">
   <div className="container flex flex-col text-center xl:text-left ">
    <h2 className=" mt-[50px] text-[20px] xl:text-xl leading-none ">Web Developer</h2><br/>
    <h2 className="text-[20px] xl:text-[40px]  leading-none font-semibold"> Hello! I am </h2><br/>
    <h1 className="text-[30px] xl:text-[50px] leading-none font-semibold text-[#508C9B]">Rafia Khurshid</h1><br/>
    <p className="max-w-[500px]">with in-depth knowledge of SEO best practices, I specialize in creating sites that are not only visually appealing but also rank well in search engines. </p>
    <div className="container mt-[30px] flex flex-row gap-2"> 
    <Button variant="outline" className="bg-[#508C9B]">Download Resume</Button>
    <Image src="/Images/fb.png" width={30} height={30} alt="" />
    <Image src="/Images/whatsapp.png" width={30} height={10} alt="" />
    <Image src="/Images/gmail.png" width={30} height={10} alt="" />
    </div>
   
   </div> 
  </div>
  );
}
