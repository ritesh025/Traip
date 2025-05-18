import SearchBox from '@/components/Helper/SearchBox';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[120vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-35"></div>
      <video
        src="/images/hero1.mp4"
        autoPlay
        loop
        muted
        preload="metadata"
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <h1 className="text-[28px] font-bold mb-8 md:mb-0 text-center md:text-[40px] lg:text-[45px] tracking-[0.5rem] uppercase text-white">
              Traip
            </h1> 
            <h1 className="text-[28px] font-bold mb-8 md:mb-0 text-center md:text-[40px] lg:text-[45px] tracking-[0.5rem] uppercase text-white ">
              your ultimate travel companion
            </h1>
            <p className="md:text-base text-center text-lg text-white font-normal  [word-spacing:2.5px]">
              {" "}
              Find your perfect trip, designed by insiders who know and love
              their cities{" "}
            </p>
          </div>
          <SearchBox />
          <Link
            href="#"
            className="rounded px-20 md:px-25 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-400 text-white text-l font-bold focus:ring-4 hover:ring-4 focus:ring-offset-4 hover:ring-offset-rose-300 transition-all ease-out duration-100 "
          >
            <span className="absolute right-0 w-7 h-35 -mt-15 transition-all duration-1000 transform translate-x-15 bg-white opacity-10 rotate-15 group-hover:-translate-x-50 ease"></span>
            <span className="relative font-bold">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
