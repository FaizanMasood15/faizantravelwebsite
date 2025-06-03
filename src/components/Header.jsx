// src/components/Header.jsx
import React, { useState } from 'react'; // We need useState for the mobile menu toggle

const Header = () => {
  // State variable to control the visibility of the mobile navigation.
  // 'isOpen' will be true when the mobile menu is open, false when closed.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="
      flex                  // Use flexbox for horizontal alignment of items
      justify-between       // Space out items: logo on left, menu/buttons on right
      items-center          // Vertically align items in the center
      p-5                   // Padding all around the header
      md:px-10              // More horizontal padding on medium screens and up
      bg-white              // White background
      shadow-md             // A subtle shadow at the bottom
      relative              // Needed for positioning the mobile overlay menu
      z-10                  // Ensures the header stays on top of other content
    ">
      {/* -------------------- 1. Logo -------------------- */}
      <div className="text-2xl md:px-4 font-bold text-blue-800">
        Faizan Masood
      </div>

      {/* -------------------- 2. Hamburger Menu Button (Visible on Mobile Only) -------------------- */}
      {/* This button will be hidden on medium screens (md) and up. */}
      <button
        className="
          md:hidden           // Hide this button on medium screens and larger
          text-gray-700       // Text color for the icon
          focus:outline-none  // Remove default focus outline for a cleaner look
        "
        onClick={() => setIsOpen(!isOpen)} // Toggle the 'isOpen' state when clicked
      >
        {/* SVG for the hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? ( // If the menu is open, show an "X" icon (optional, but good UX)
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : ( // If the menu is closed, show the hamburger bars
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          )}
        </svg>
      </button>

      {/* -------------------- 3. Navigation Links & Buttons -------------------- */}
      {/* This 'nav' element controls the visibility and layout of the menu. */}
      <nav className={`
        ${isOpen ? 'block' : 'hidden'}  // CONDITIONAL: 'block' if isOpen is true, 'hidden' otherwise
        md:block                      // ALWAYS 'block' on medium screens (md) and larger
        absolute                      // Position absolutely for mobile overlay
        md:static                     // Reset to static positioning on medium screens (md) and larger
        top-full                      // Position below the header on mobile
        left-0                        // Align to the left edge on mobile
        w-full                        // Take full width on mobile
        md:w-auto                     // Auto width on medium screens and larger
        bg-white                      // White background for the mobile overlay
        md:bg-transparent             // Transparent background on medium screens and larger
        shadow-lg                     // Add a shadow to the mobile overlay
        md:shadow-none                // No shadow on medium screens and larger
        py-4                          // Vertical padding for the mobile overlay
        md:py-0                       // No vertical padding on medium screens and larger
      `}>
        <ul className="
          flex                    // Use flexbox for the list items
          flex-col                // Stack items vertically on mobile
          md:flex-row             // Arrange items horizontally on medium screens and larger
          items-center            // Center items horizontally in the column on mobile
          space-y-4               // Vertical spacing between items on mobile
          md:space-y-0            // No vertical spacing on medium screens and larger
          md:space-x-10            // Horizontal spacing between items on medium screens and larger
          text-gray-700           // Default text color for links
        ">
          <li><a href="#" className="hover:text-blue-600 transition-colors">Destinations</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-colors">Hotels</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-colors">Flights</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-colors">Bookings</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-colors">Login</a></li>
          <li>
            <button className="
              border border-gray-400 // Border for the button
              rounded-md             // Rounded corners
              px-4 py-2              // Padding
              hover:bg-blue-500      // Blue background on hover
              hover:text-white       // White text on hover
              transition-colors      // Smooth transition for color changes
            ">
              Sign up
            </button>
          </li>
          <li>
            {/* Language Selector */}
            <select className="
              border border-gray-400           // No border
              focus:outline-none    // Remove focus outline
              bg-white              // Ensure background is white (for consistency)
              md:bg-transparent     // Transparent on desktop
              py-2 px-2             // Padding for better click area
              rounded-md            // Slightly rounded corners
            ">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;