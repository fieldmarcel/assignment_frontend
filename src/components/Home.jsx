import React from 'react';
import { FaPlay } from 'react-icons/fa';
const Home = () => {
  return (
    <div className=" lg:mt-10 bg-gray-100 px-4 py-10 text-gray-800 font-sans">

      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Simplify Your Life with Our <br className="hidden sm:block" /> Todo App
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Stay organised and boost your productivity with our intuitive todo website. <br className="hidden sm:block" />
          Experience a modern approach to task management that fits your lifestyle.
        </p>
      </section>

      <section className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
          Get Started
        </button>
        <button className="border-2 border-red-500 px-6 py-3 rounded-full font-semibold text-red-500 hover:bg-red-100 transition">
          Learn More
        </button>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-6xl mx-auto">
        {/* /* Left  */ }
        <div className="bg-red-500 text-white rounded-3xl p-6 md:p-10 md:h-[36rem]  w-full md:w-2/3">
          <h2 className="text-4xl md:text-[4.25rem] font-bold mb-4 leading-tight">
            <span className="text-gray-300">Organize.</span> <br /> Achieve. <br /> Relax.
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Turn clutter into clarity, chaos into control, and dreams into done. <br />
            Transform bold vision into market success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <button className="bg-white text-black px-6 py-3 md:py-6  md:mt-5 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Get Started Today
            </button>
            <button className="bg-red-400 text-white px-6 py-3 md:py-6 md:mt-5 rounded-full font-semibold hover:bg-red-300 transition">
              Discover Features
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 md:h-[36rem] h-[20rem] rounded-xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 md:bg-cover bg-cover bg-top  md:bg-center"
            style={{ backgroundImage: `url('/home.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/5 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-semibold text-gray-400">Your Tasks.</h1>
                <h1 className="text-xl font-semibold text-gray-800">Our Tools.</h1>
              </div>
              <div className="flex space-x-1">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="h-2 w-2 rounded-full border border-white" />
                <span className="h-2 w-2 rounded-full border border-white" />
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-sm text-gray-700">
                <h3 className="font-semibold">Logoiosum</h3>
                <h3 className="text-black font-light">Freddy Halvorson</h3>
                <h3 className="text-[0.7rem] text-gray-400">Chief Productivity Enthusiast</h3>
              </div>
              <div className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition"><FaPlay/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center flex-wrap gap-6 mt-10">
        <img src="/Group 1 (10).svg" alt="Google" className="h-10 w-auto" />
        <img src="/Group 2 (5).svg" alt="Partner" className="h-10 w-auto" />
        <img src="/Group 1 (10).svg" alt="Google Again" className="h-10 w-auto" />
      </section>
    </div>
  );
};

export default Home;
