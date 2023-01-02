import React from 'react'
import hero from '../../Images/juiceHero.png'
// background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
export default function HeroSection() {
  return (
    <section className="mb-16 p-4 text-[#fc6a52]">
    <div className="block rounded-lg shadow-lg bg-gradient-to-b from-[#d1fdff] to-[#fddb92]">
      <div className="flex flex-wrap items-center">
        <div className="lg:flex pl-2 grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-4/12">
          <img src={hero} alt="Trendy Pants and Shoes" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4 text-lime-800">What's the secret of the great Juice Bar 🥤?</h2>
            <p className="uppercase text-red-600 font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 mr-2">
                <path fill="currentColor"
                  d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                </svg>Hot news
            </p>
            <p className="text-[#3459be] mb-2 text-justify">
              At Juice Bar, it's our mission to make wellness the simplest, most delicious part of your day.
            </p>
            <p className="text-[#3459be] mb-2 text-justify">
              Our smoothies, juices, and bowls are made fresh every day, packed with all natural ingredients and super foods to nourish you.
            </p>
            <p className="text-[#3459be] md:font-bold md:text-xl text-center text-lg">
              No ice. No filler. All natural And Fresh. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
