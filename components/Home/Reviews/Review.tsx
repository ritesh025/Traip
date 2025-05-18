import React from "react";
import { MdStarPurple500 } from "react-icons/md";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-emerald-900">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our clients say about us
          </h1>
          <p className="mt-6 text-gray-100 ">
            We are dedicated to providing exceptional customer service and
            ensuring your satisfaction with our travel planning services. Our team of experts is committed to helping you find the perfect trip, whether you're planning a weekend getaway, a family vacation, or a business trip.
          </p>
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.99</p>
              <p className="text-white mb-2">Overall rating (4.99/5)</p>
              <div className="flex items-center">
                <MdStarPurple500 className="text-white" />
                <MdStarPurple500 className="text-white" />
                <MdStarPurple500 className="text-white" />
                <MdStarPurple500 className="text-white" />
                <MdStarPurple500 className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
            <ReviewSlider/>
        </div>
      </div>
    </div>
  );
};

export default Review;
