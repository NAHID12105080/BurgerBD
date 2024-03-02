import Link from "next/link";
import React from "react";
import { FaBurger } from "react-icons/fa6";

import "../../globals.css";
import { Button } from "@/components/ui/button";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav className="flex flex-row fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <div className="h-[12vh] bg-white flex items-center space-x-2">
        <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.rem] text-orange-500 cursor-pointer" />
        <h1 className="text-[20px] sm:text-[30px] font-semibold">BurgerBD</h1>
      </div>
      <ul className="hidden lg:flex items-center space-x-10">
        <li className="nav-tittle_color">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-tittle_color">
          {" "}
          <Link href="/">Menu</Link>
        </li>
        <li className="nav-tittle_color">
          {" "}
          <Link href="/">Shop</Link>
        </li>
        <li className="nav-tittle_color">
          {" "}
          <Link href="/">Blog</Link>
        </li>
        <li className="nav-tittle_color">
          {" "}
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <Button>
          <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem]" />
          <span className="font-bold">Order Now</span>
        </Button>
        <Button>
          <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem]" />
        </Button>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
