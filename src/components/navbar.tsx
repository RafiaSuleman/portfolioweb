"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const Links = [
    {
      name: "Home",
      path: "/",
    },
   
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Work",
      path: "/work",
    },
   
  ];
  const PathName = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => (
       <>
          <Link
          key={index}
            href={link.path}
            className={`${
              link.path === PathName &&
              " border-b-2 border-color bg-color px-1 rounded-md"
            } capatilize font-medium transition-all`}>
            {link.name}
          </Link>
          </>
      ))}
    </nav>
  );
};

export default Navbar;
