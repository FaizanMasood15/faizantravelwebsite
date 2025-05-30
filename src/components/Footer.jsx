// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo and Tagline */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <div className="text-3xl font-bold text-blue-800 mb-4">Faizan Butt 15</div>
          <p className="text-gray-600 text-sm">Book your trip in minutes, get full control for much longer.</p>
        </div>

        {/* Column 2: Company */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Mobile</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">Help/FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">Press</a></li>
            <li><a href="#" className="hover:text-blue-600">Affiliates</a></li>
          </ul>
        </div>

        {/* Column 4: More */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-gray-900 mb-4">More</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">Airlinefees</a></li>
            <li><a href="#" className="hover:text-blue-600">Airline</a></li>
            <li><a href="#" className="hover:text-blue-600">Low fare tips</a></li>
          </ul>
        </div>

        {/* Column 5: Social & App Links */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            {/* Social Icons - use SVGs or icon library */}
            <a href="#" className="text-gray-500 hover:text-blue-600"><img src="\images\Social.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><img src="/images/Social (1).png" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><img src="images\Social (2).png" alt="Twitter" className="w-6 h-6" /></a>
          </div>
          <p className="text-gray-600 text-sm mb-2">Discover our app</p>
          <div className="flex justify-center md:justify-start space-x-2">
            <a href="#"><img src="/images/Google Play.png" alt="Google Play" className="h-10" /></a> {/* Placeholder */}
            <a href="#"><img src="/images/Play Store.png" alt="Apple Store" className="h-10" /></a> {/* Placeholder */}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        All rights reserved@Faizanbutt15.co
      </div>
    </footer>
  );
};

export default Footer;