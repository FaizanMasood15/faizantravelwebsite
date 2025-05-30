// src/components/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-purple-100 bg-opacity-30 rounded-t-3xl md:rounded-t-[8rem] relative overflow-hidden">
      {/* Background decorative elements (optional) */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-300 opacity-20 rounded-full"></div>
      <div className="absolute -top-12 -left-12 w-60 h-60 bg-yellow-200 opacity-20 rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
          Subscribe to get information, latest news and other
          interesting offers about Jadoo
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full md:w-auto px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;