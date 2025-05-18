'use client';
import React, { useEffect } from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const ScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
    }
  return (
    <div className="fixed bottom-4 right-4">
      {" "}
      {isVisible && (
        <button
          onClick={ScrollToTop}
          className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none hover:bg-red-500 hover:animate-pulse"
        >
          <BsArrowUpCircleFill />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop
