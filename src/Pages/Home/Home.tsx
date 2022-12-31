import React from 'react'
import Gallery from './Gallery';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <div className="text-center bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED]">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-lime-800 pt-2 pb-4">
        Welcome To Juice Bar!
      </h1>
      <HeroSection />
      <h1 className="text-xl mb-4 sm:text-2xl md:text-3xl text-center font-bold text-lime-800 pb-4">
        HAVE FUN. BE AMAZING.
      </h1>
      <Gallery />
    </div>
  );
}
