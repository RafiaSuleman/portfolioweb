import React from "react";
import Link from "next/link";
import Navbar from "./navbar";
const Header = () => {
  return (
    <div>
      <nav className=" py-7 bg-[#134B70] text-white flex justify-between items-center ">
        <Link href="/">
          <h1 className="md:mx-[50px] mx-[20px] lg:mx-[70px] text-2xl font-bold">
            Rafia
          </h1>
        </Link>
      
      <div className="hidden xl:flex gap-8 items-center mr-[40px]">
         <Navbar/> 
        <Link href='/contact'>Hire me</Link>
      </div>
      <div className="xl:hidden mr-[40px]">
        Mobile Nav
      </div>
      </nav>
    </div>
  );
};

export default Header;
