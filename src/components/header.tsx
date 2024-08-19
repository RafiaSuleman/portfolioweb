import React from "react";
import Link from "next/link";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import MobileNav from "./ui/mobilenav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-[#1C1B22]">
    <div className=" container mx-auto flex justify-between items-center">
      <Link href="/">
        <h1 className=" text-4xl font-semibold">
          Luke <span className="text-[#01FCA4]">.</span>
        </h1>
      </Link>

      <div className="hidden xl:flex gap-8 items-center">
        <Navbar />
        <Link href="/contact">
          <Button>Hire me</Button>
        </Link>
      </div>
      <div className="xl:hidden">mobilenav{/* <MobileNav/> */}</div>
    </div>
  </header>
  );
};

export default Header;
