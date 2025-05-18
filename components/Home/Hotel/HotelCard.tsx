import { hotelsData } from '@/data/data';
import React from 'react'
import { IoHeart } from "react-icons/io5";

type Props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
        rates: string;
    }
}

const HotelCard = ({hotel}: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
          <IoHeart className="w-5 h-5 text-red-600" />
        </div>
        <div className="absolute inset-0 bg-black z-10 opacity-15 rounded-2xl"></div>
        <img
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110 bg-transparent"
        />
      </div>
      <div>
        <h1 className="mt-4 text-lg font-semibold text-emerald-900 hover:text-black cursor-pointer transition-all duration-300">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-600 mt-3 font-medium mb-6">
          {hotel.location}
        </p>

        <div className="flex items-center space-x-2">
          <div className="px-2 py-2 bg-emerald-800 text-white rounded-md text-sm font-bold">
            {hotel.rating}
          </div>
          <p className="text-sm text-gray-600">{hotel.rates}</p>
          <p className="text-sm text-gray-900 font-bold">{hotel.reviews}</p>
        </div>
        <p className="mt-3 text-gray-700 font-medium">
          Starts from{" "}
          <span className="text-green-700 underline font-extrabold text-lg">Rs. ₹{hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard
