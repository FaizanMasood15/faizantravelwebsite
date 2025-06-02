// src/components/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    icon: '/images/Group 48.png', // Placeholder
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.'
  },
  {
    icon: '/images/Group 51.png', // Placeholder
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west nord for the.'
  },
  {
    icon: '/images/Group 50.png', // Placeholder
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
  },
  {
    icon: '/images/Group 49.png', // Placeholder
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers.'
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-sm uppercase text-center text-gray-500 font-semibold mb-2">CATEGORY</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        We Offer Best Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;