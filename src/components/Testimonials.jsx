// src/components/Testimonials.jsx
import React, { useState } from 'react';

const testimonialsData = [
  {
    quote: "On the Windows talking painted posture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike Taylor",
    location: "Lahore, Pakistan",
    avatar: "/images/avatar-mike.png" // Placeholder
  },
  {
    quote: "Another great quote from a happy customer, showing the amazing benefits of our service.",
    author: "Chris Thomas",
    location: "CEO of Red Button",
    avatar: "/images/avatar-chris.png" // Placeholder
  },
  // Add more testimonials
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-sm uppercase text-gray-500 font-semibold mb-2">TESTIMONIALS</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What People Say About Us.
          </h1>
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'} transition-colors`}
              ></button>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 relative max-w-md w-full">
            <img src="images\Image (1).png" alt={currentTestimonial.author} className="w-16 h-16 rounded-full absolute -top-8 -left-8 border-4 border-white shadow-md" />
            <p className="text-gray-700 leading-relaxed mb-4">"{currentTestimonial.quote}"</p>
            <h4 className="font-semibold text-gray-800">{currentTestimonial.author}</h4>
            <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
          </div>

          {/* Navigation arrows for carousel (optional) */}
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden md:block">
            &lt;
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden md:block">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


