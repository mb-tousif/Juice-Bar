import React from 'react'
import Gallery from './Gallery';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-lime-800 mt-2 mb-4">Welcome To Juice Bar!</h1>
      <Gallery/>
    </div>
  );
}
