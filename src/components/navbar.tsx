"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { text } from "stream/consumers";
const Navbar = () => {
  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
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
              "text-[#EB70F1] border-b-2 border-[#EB70F1]"
            } capatilize font-medium hover:text-[#EB70F1] transition-all`}>
            {link.name}
          </Link>
          </>
      ))}
    </nav>
  );
};

export default Navbar;
