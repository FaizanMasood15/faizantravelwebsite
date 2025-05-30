// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TopDestinations from './components/TopDestinations';
import BookingSteps from './components/BookingSteps';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <TopDestinations />
        <BookingSteps />
        <Testimonials />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;