
import Header from "@/components/header";
import Social from "@/components/ui/social";
import Stats from "@/components/ui/stats";
export default function Home() {
  return (
    <section className="h-full ">
       
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-10 ">
          <div className="text-center">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br />{" "}
              <span className="text-color">Rafia Khurshid</span>
            </h1>
            <p className="max-w-[500px] mb-9 flex justify-center items-center text-white/80 mx-auto">
            Full-stack developer skilled in Next.js for building fast, scalable web apps. Uses VS Code for efficient coding, debugging, and managing both frontend and backend workflows.
            </p>
              <div className=" -mt-5 flex justify-center items-center">
                <Social
                  containerStyles=" flex gap-6"
                  iconStyles="w-9 h-9 border border-color rounded-full flex justify-center items-center text-color text-base hover:bg-[#02110C] hover:text-primary hover:transition-all duration-500"
                />
            </div>
          </div>
         {/*  <div className="h-full w-full xl:order-none mb-8 xl:mb-0 flex justify-center items-center ">
            <Photo />
          </div> */}
        </div>
        <Stats />
      </div>
    </section>
  );
}
