// src/components/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ image, name, price, days }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-blue-600 font-bold">{price}</span>
        </div>
        <p className="text-gray-500 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M16 11h.01M12 15h.01M12 19h.01M6 21h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {days} Days Trip
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;