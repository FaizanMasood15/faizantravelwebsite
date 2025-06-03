// src/components/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ image, name, price, days }) => {
  return (
    <div className="
      rounded-xl           // Apply rounded corners to the whole card
      shadow-lg            // Add a shadow to the card
      overflow-hidden      // CRUCIAL: Hides anything that goes outside the card's boundaries
      bg-white             // Card background color
      hover:shadow-xl      // Larger shadow on hover for effect
      transition-shadow duration-300 // Smooth shadow transition
    ">
      {/* THIS IS THE CONTAINER FOR THE IMAGE. 
        It defines the fixed dimensions (width and height) that the image will fill.
      */}
      <div className="
        w-full               // This div must take the full width of its parent card.
        h-64                // <-- THIS IS THE LINE TO ADJUST for vertical size
        overflow-hidden     // Essential to hide any part of the image that spills out
        relative            // Good practice if you ever need absolute positioning inside (not strictly needed for this current image setup, but harmless)
      ">
        <img
          src={image}
          alt={name}
          className="
            w-[450px]          // Make the image take 100% width of its parent container (the div directly above)
            h-full          // Make the image take 100% height of its parent container (the div directly above)
            object-cover    // CRUCIAL: This makes the image fill the area, cropping if needed
            object-center   // NEW: This defaults to centering the image's content.
                            //      If the top is still cut, you might try object-top or object-bottom
          "
        />
      </div>

      {/* This div contains the text content of the card */}
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