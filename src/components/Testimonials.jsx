import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10 bg-white relative">
      <h1 className="text-3xl font-bold mb-4 text-start">
        Customer Testimonials
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-start items-start max-w-xl">
        This tool has transformed my productivity and organization!
      </p>

      <div className="flex sm:flex-row flex-col justify-center  gap-x-10 mt-4">

        <div className="relative left-[-10%] ">
          <div className="w-72 h-91 border-8 border-red-500"></div>

          <div className="absolute left-20 top-10 z-10  bottom-10 bg-white sm:p-6 sm:w-80 w-50 ">
            <h2 className="sm:text-lg font-medium mb-4 text-gray-800 leading-relaxed">
              "Using this website has made my tasks so much easier! I can't 
              imagine my day without it."
            </h2>

            <div className="flex flex-row items-center mb-4">
              <div className="flex flex-row items-center -mr-2">
                <div className="bg-red-500 w-6 h-6 z-0"></div>
                <div className="bg-black w-16 h-0.5 -ml-3 z-10"></div>
              </div>

              <div className="ml-4">
                <h3 className="font-semibold">Sherri Cronin</h3>
                <p className="text-sm text-gray-500">Project Manager, TechCorp</p>
              </div>
            </div>

            <div className="flex flex-row gap-4 mt-4 text-red-500">
              <FaAngleLeft className="text-2xl text-black border-2 border-red-500 rounded-full cursor-pointer" />
              <FaAngleRight className="text-2xl text-white bg-red-500 rounded-full cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="relative ">
          <div className="w-72 h-67 mt-2 sm:top-[11%] border-8 border-red-500 overflow-hidden relative z-0">
            <img
              src="/pexels.jpg"
              alt="img"
              className="absolute   p-3  w-80 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
