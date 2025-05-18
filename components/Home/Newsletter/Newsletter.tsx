import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center flex-col w-full">
      <FaEnvelopeOpenText className="w-16 mt-20 h-16 text-white" />
      <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>Subscribe to our newsletter</h1>
      <p className='mt-3 text-white text-xs sm:text-sm'>Sign up for our newsletter to get the latest news and offers</p>

      <div className="w-full">
        <input type="text" name="" id="" className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-2xl outline-none" placeholder="Enter your email" />
        <button className="px-6 py-3.5 bg-emerald-900
         text-white hover:bg-emerald-600 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-2xl outline-none">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter
