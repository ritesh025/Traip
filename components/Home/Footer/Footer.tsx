import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaThreads, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Gift Cards{" "}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            News
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Contacts
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Legal Information
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Terms & Conditions
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Sitemap
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Hire Cab
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Activity Tracker
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Tour list
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Flight Tracker
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-emerald-900">
            Agents
          </p>
        </div>

        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Phone Number</h1>
            <h1 className="text-base font-bold text-emerald-900 mt-1">
              +91 700XXX XXXX
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Email Address</h1>
            <h1 className="text-base font-bold text-emerald-900 mt-1 cursor-pointer hover:text-emerald-600 hover:text-lg">
              traipexample@gmail.com
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-[80%] border-t pt-8 flex flex-col md:flex-row items-center justify-between text-gray-900 text-sm">
        <p className="text-center md:text-center font-semibold cursor-pointer">
          Copyright © 2025 Traip | Ritesh Bafna. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link
            href={"#"}
            className="text-gray-600 text-xl hover:text-gray-950"
          >
            {" "}
            <FaFacebook />
          </Link>
          <Link
            href={"#"}
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            {" "}
            <FaXTwitter />
          </Link>
          <Link
            href={"#"}
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            {" "}
            <FaInstagram />
          </Link>
          <Link
            href={"#"}
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            {" "}
            <FaThreads />
          </Link>
          <Link
            href={"www.youtube.com"}
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            {" "}
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
