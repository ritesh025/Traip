import React from 'react'
import { FaCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
      <div className="flex items-center space-x-6">
        <FaMapMarkedAlt className="w-7 h-7 text-green-700" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Destination</p>
          <input
            type="text"
            placeholder="Enter your destination"
            className="outline-none border-none placeholder:text-gray-600"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <FaCalendarAlt className="w-7 h-7 text-green-700"></FaCalendarAlt>
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Departure</p>
          <input type="date" className="outline-none border-none" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <FaCalendarAlt className="w-7 h-7 text-green-700"></FaCalendarAlt>
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Return</p>
          <input type="date" className="outline-none border-none" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <BsPeopleFill className="w-7 h-7 text-green-700" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Guests</p>
          <p className="text-base font-normal">1 Guest - 1 Room</p>
          
        </div>
      </div>
    </div>
  );
}

export default SearchBox
