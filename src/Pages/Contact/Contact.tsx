import React from 'react';
import heroPic from '../../Images/Banner-2.jpg';
import { MdOutgoingMail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="text-center">
      <img src={heroPic} alt="Banner" className='w-full max-h-60' />
      <h1 className="text-3xl text-lime-800 mb-2 mt-3">/DROP US A LINE</h1>
      <p className='text-base'>
        We want to hear from you! Please fill out the form completely and we
        will get back to you within 24 hours.
      </p>
      <div className="lg:w-3/5 mx-auto md:w-2/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white flex justify-center bg-[#046434] border-0 py-2 px-6 hover:bg-[#4c1571f1] rounded text-lg">
          Button <MdOutgoingMail className='h-7 w-7 ml-4 my-auto'/>
        </button>
      </div>
    </div>
  );
}