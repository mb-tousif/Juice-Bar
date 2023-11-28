import React from 'react'
import Gallery from './Gallery';
import HeroSection from './HeroSection';
import SubscribeSection from './SubscribeSection';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-lime-800 pt-4 pb-4">
        Welcome To Fresh Juice Bar 🥤!
      </h1>
      <HeroSection />
      <h1 className="text-xl mb-4 sm:text-2xl md:text-3xl text-center font-bold text-lime-800 pb-4">
        Have fun , be healthy and enjoy your life 🥤!
      </h1>
      <Gallery />
      <SubscribeSection />
    </div>
  );
}
