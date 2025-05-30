// src/components/Partners.jsx
import React from 'react';

const partnerLogos = [
  '/images/image 27.png', // Placeholder
  '/images/image 28.png', // Placeholder
  '/images/image 30.png', // Placeholder
  '/images/image 31.png', // Placeholder
  '/images/Group 63.png', // Placeholder
];

const Partners = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} className="h-10 md:h-12 object-contain" />
        ))}
      </div>
    </section>
  );
};

export default Partners;