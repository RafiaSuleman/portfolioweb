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
