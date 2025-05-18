"use client";
import { NavLinks } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import { BiTrip } from "react-icons/bi";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) 
        setNavBg(true);
        if (window.scrollY < 90)
          setNavBg(false);
        
      };
      window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={` ${
        navBg ? " bg-emerald-900 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div
        className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto
        "
      >
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <BiTrip className="w-7 h-7 text-emerald-900" />
          </div>
          <h1 className="text-xl md:text-2xl text-white  font-bold italic">
            TrAip
          </h1>
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className='relative text-white text-lg font-medium w-fit block after:block after:content-[" "] after:absolute after:h-[3px] after:bg-yellow-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right'>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <button className="rounded-lg md:px-12 md:py-2.5 px-8 py-2 overflow-hidden group bg-white text-emerald-950 relative hover:bg-gradient-to-r  hover:bg-gray-200 text-l font-bold focus:ring-4 hover:ring-4 focus:ring-offset-3 hover:ring-offset-zinc-700 transition-all ease-in duration-100">
            Book Now
          </button>
          <FaBarsStaggered
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
