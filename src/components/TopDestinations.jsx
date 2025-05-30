// src/components/TopDestinations.jsx
import React from 'react';
import DestinationCard from './DestinationCard';

const destinationsData = [
  {
    image: '/images/Rectangle 14.png', // Placeholder
    name: 'Rome, Itally',
    price: '$5,42k',
    days: '10'
  },
  {
    image: '/images/Rectangle 14.jpg', // Placeholder
    name: 'London, UK',
    price: '$4.2k',
    days: '12'
  },
  {
    image: '/images/Rectangle 14 (1).png', // Placeholder
    name: 'Full Europe',
    price: '$15k',
    days: '28'
  },
];

const TopDestinations = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-sm uppercase text-center text-gray-500 font-semibold mb-2">Top Selling</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        Top Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {destinationsData.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            name={destination.name}
            price={destination.price}
            days={destination.days}
          />
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;