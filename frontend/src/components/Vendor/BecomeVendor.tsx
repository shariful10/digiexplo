import Link from "next/link";
import React from "react";
import { FaPhone, FaUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const BecomeVendor = () => {
  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
      <div className="py-6 md:py-12 px-5 md:px-10 lg:px-0 flex justify-center items-center">
        <div className="bg-white px-7 md:px-10 lg:px-16 py-14 rounded-xl w-full max-w-xl">
          <h2 className="text-2xl xl:text-4xl font-semibold text-center">
            Vendor Info
          </h2>

          <form className="mt-10 ">
            <div className="md:flex gap-8">
              <div className="mb-5 md:mb-8">
                <label
                  htmlFor="Company Name"
                  className="block font-medium text-gray-400 text-xs md:mb-2"
                >
                  Company Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="companyName"
                    className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
                    placeholder="Z Company"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 md:mb-8">
                <label
                  htmlFor="Owner Name"
                  className="block font-medium text-gray-400 text-xs md:mb-2"
                >
                  Owner Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="ownerName"
                    className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="mb-5 md:mb-8">
                <label
                  htmlFor="Website"
                  className="block font-medium text-gray-400 text-xs md:mb-2"
                >
                  Website
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="website"
                    className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
                    placeholder="www.xyz.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 md:mb-8">
                <label
                  htmlFor="Address"
                  className="block font-medium text-gray-400 text-xs md:mb-2"
                >
                  Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
                    placeholder="201 Main St, New York"
                    required
                  />
                </div>
              </div>
            </div>

            {/* File input */}
            <div className="">
              <div className="w-full">
                <div className="flex items-center border-b-2 border-gray-300 py-4">
                  <input
                    type="file"
                    name="profileImg"
                    id="custom-input"
                    hidden
                  />
                  <label
                    htmlFor="custom-input"
                    className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
                  >
                    Choose file
                  </label>
                  <label className="text-sm text-slate-500">
                    Profile Image
                  </label>
                </div>
              </div>
            </div>

            {/* File input End */}

            <div className="mt-7">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 rounded-full py-2 px-8 w-full text-lg font-semibold text-white transition-colors duration-500"
              >
                Complete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeVendor;
