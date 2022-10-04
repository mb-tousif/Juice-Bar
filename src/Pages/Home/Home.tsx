import React from 'react'
import Loader from '../../Components/Loader/Loader';
import Gallery from './Gallery';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-lime-800 mt-2 mb-3">Welcome To Juice Bar!</h1>
      <Gallery/>
      <Loader/>
    </div>
  );
}
