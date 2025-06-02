// src/components/BookingSteps.jsx
import React from 'react';

const BookingSteps = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Steps */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-sm uppercase text-gray-500 font-semibold mb-2">Easy and Fast</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="bg-yellow-100 p-3 rounded-xl mr-4 flex-shrink-0">
                <img src="/images/Group 7.png" alt="icon" className="w-6 h-6" /> {/* Placeholder */}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Choose Destination</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
                <img src="/images/Group 12.png" alt="icon" className="w-6 h-6" /> {/* Placeholder */}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Make Payment</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-100 p-3 rounded-xl mr-4 flex-shrink-0">
                <img src="\images\Rectangle 22.png" alt="icon" className="w-6 h-6" /> {/* Placeholder */}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Reach Airport on Selected Date</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Trip Image Card */}
        <div className=" md:w-1/2 flex justify-center items-center relative">
          <div className="bg-white rounded-2xl shadow-xl p-6 relative w-80">
            <img src="\images\Rectangle 17.jpg" alt="Trip to Greece" className="w-full h-48 object-cover rounded-xl mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Trip To Greece</h4>
            <p className="text-gray-500 text-sm mb-2">14-29 June | by Robin jiri</p>
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                24 people going
              </span>
              {/* Heart Icon */}
              <svg className="w-5 h-5 text-red-400 hover:text-red-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-200">
              Ongoing
            </button>
          </div>
          {/* Green circle and "Trip to Rome" card can be absolutely positioned elements */}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;