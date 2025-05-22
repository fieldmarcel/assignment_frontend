import React from 'react';

const Join = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 md:p-10 md:pt-6 lg:p-16">

      <div className="w-[95%] md:w-1/2 flex justify-center">
        <img
          src="/pexels2.jpg"
          alt="Organize"
          className="w-full md:w-[28rem] lg:w-[40rem] h-auto  object-cover shadow-md"
        />
      </div>

      <div className="flex flex-col items-start gap-5 text-center md:text-left w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Start Organizing Your <br className="hidden md:block" /> Life Today
        </h1>

        <p className="text-base sm:text-sm text-gray-600">
          Join us now and transform your productivity with our intuitive to-do <br className='block'/>
          list platform!
        </p>

        <div className="flex    sm:flex-row gap-4">
          <button className="px-6 py-3 bg-red-500 text-white  hover:bg-red-600 transition duration-300">
            Sign up
          </button>
          <button className="px-6 py-2 border-2 border-red-500 text-black  hover:bg-red-50 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
