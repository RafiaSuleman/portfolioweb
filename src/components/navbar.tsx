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
    <div>
      {Links.map((link, index) => (
       <>
          <Link
            href={link.path}
            className={`${
              link.path === PathName &&
              "text-[#4985B9] border border-b-2 border-[#4985B9]"
            } hover:text-[#4985B9]`}
            key={index}
          >
            {link.name}
          </Link>
          </>
      ))}
    </div>
  );
};

export default Navbar;
