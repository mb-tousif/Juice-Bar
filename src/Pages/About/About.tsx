import React from 'react'
import about from '../../Images/About.png'
import avatar from '../../Images/owner.jpg'


export default function About() {
  return (
    <div className="text-center bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED]">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-lime-800 pt-2 pb-2">/ OUR STORY</h1>
      <div className="p-4">
        <img src={about} alt="About" className='mx-auto my-auto max-h-80 rounded-full border-4 border-emerald-800' />
      </div>
      <p className='text-justify text-sm md:text-lg p-3'>Juice Bar was born because our founders understood that wellness didn't have to be high maintenance. Prioritizing nutrition shouldn't mean sacrificing taste. What started as a little passion project continued to grow, expanding across states and infusing the pursuit of wellness with joy. As we continue to write Juice Bar's story, we begin every day with gratitude for the people who have carried us this far with your support and love for our fresh, homemade juices, smoothies, bowls, and more. </p>
      <h1 className="text-3xl text-lime-800 mt-2 mb-2">/ OUR LEADERSHIP</h1>
      <div className="p-4">
        <img src={avatar} alt="About" className='mx-auto my-auto max-h-80 rounded-full border-4 border-emerald-800' />
      </div>
      <span className="text-3xl font-medium text-lime-800 hover:underline mt-2 mb-2">Jon Due</span>
      <h1 className="text-2xl text-lime-800 pt-2 pb-2">Founder</h1>
    </div>
  );
}
