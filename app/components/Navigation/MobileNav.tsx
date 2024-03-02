"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
// Imports...
import React, { useState } from "react";
import Link from "next/link";
import { FaBurger } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>(pathname);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu className="cursor-pointer text-2xl sm:hidden" />
      </SheetTrigger>
      <SheetContent side={"left"} className="  border-none">
        <div className="flex items-center  ">
          <FaBurger className="w-[1.2rem] h-[1.2rem]  text-orange-500 cursor-pointer" />
          <h1 className="text-[20px] sm:text-[30px] font-semibold">BurgerBD</h1>
        </div>
        <ul className=" space-y-10">
          <li
            className={`text-[35px] font-medium mt-6  ${
              activeLink === "/" ? "primary-gradient rounded-lg p-3" : ""
            }`}
            onClick={() => handleClick("/")}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-[35px] font-medium   ${
              activeLink === "/menu"
                ? "primary-gradient rounded-lg p-3"
                : "gap-4-4"
            }`}
            onClick={() => handleClick("/menu")}
          >
            <Link href="/menu">Menu</Link>
          </li>
          <li
            className={`text-[35px] font-medium   ${
              activeLink === "/shop" ? "primary-gradient  rounded-lg p-3" : ""
            }`}
            onClick={() => handleClick("/shop")}
          >
            <Link href="/shop">Shop</Link>
          </li>
          <li
            className={`text-[35px] font-medium ${
              activeLink === "/blog"
                ? "primary-gradient rounded-lg p-3"
                : "gap-4"
            }`}
            onClick={() => handleClick("/blog")}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={`text-[35px] font-medium ${
              activeLink === "/contact" ? "primary-gradient rounded-lg p-3" : ""
            }`}
            onClick={() => handleClick("/contact")}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <SheetClose asChild></SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
