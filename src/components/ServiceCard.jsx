// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" /> {/* Use actual icons */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;