// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 md:py-24 px-4 bg-gray-50 overflow-hidden relative">
      {/* Background Gradient/Shape (Optional, for visual flair) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-100 opacity-50 rounded-bl-full hidden md:block"></div>

      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-lg text-red-500 font-semibold mb-2">BEST DESTINATIONS AROUND THE WORLD</h2>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6">
          Travel, enjoy <br /> and live a new <br /> and full life
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Built Wicket longer admire do barton vanity itself do in it.
          Preferred to sportsmen it engrossed listening. Park gate sell they west nord for the.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
            Find out more
          </button>
          <button className="flex items-center text-blue-500 font-semibold px-4 py-2 rounded-md hover:text-blue-700">
            <span className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center mr-2 text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
            </span>
            Play Demo
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative">
        <img
          src="/images/Image.png" // You'll need to add an image like this in your `public` folder
          alt="Traveler"
          className="max-w-full h-auto object-contain"
        />
        {/* You can add the small airplane icons as absolute positioned elements here */}
        {/* For example: */}
        <img src="/images/Group 51.png" alt="plane" className="absolute top-10 left-0 w-16 h-16 animate-fly" />
      </div>
    </section>
  );
};

export default Hero;