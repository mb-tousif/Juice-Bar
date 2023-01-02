import React from 'react';
import heroPic from '../../Images/contact.png';
import { MdOutgoingMail } from "react-icons/md";
import { useForm } from '@formspree/react';
import feedback from "../../Images/contactSuccess.png";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgedqyov");
  if (state.succeeded) {
    return (
      <div className="sm:p-4 p-2 my-auto bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED]">
        <h1 className="sm:text-2xl text-lg mt-10 text-[#027614] font-semibold text-center">
         ✨ Thank you for your valued Feedback ✨
        </h1>
        <img src={feedback} alt="Feedback Juice" className='w-64 mt-6 mx-auto my-auto' />
      </div>
    );
  }

  return (
    <div className="text-center bg-gradient-to-b min-h-[300px] from-[#c1dfc4] to-[#ADCDED]">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-lime-800 pt-2 pb-4">/ DROP US A LINE</h1>
      <img src={heroPic} alt="Banner" className='w-full opacity-80 md:w-3/4 mx-auto mt-4 max-h-72' />
      <p className='text-base mt-2 font-semibold'>
        We want to hear from you! Please fill out the form completely and we
        will get back to you within 24 hours.
      </p>
      <form onSubmit={handleSubmit} className="lg:w-3/5 mx-auto md:w-2/3 bg-gradient-to-b p-4 from-[#c1dfc4] to-[#ADCDED] flex flex-col md:ml-auto w-full md:py-8 mt-8">
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-[#90a03fb0] rounded border-none text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            className="w-full bg-[#90a03fb0] rounded border-none text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-[#626921d3] rounded border-none h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button type='submit' disabled={state.submitting} className="text-white flex justify-center bg-[#046434] border-0 py-2 px-6 hover:bg-[#4c1571f1] rounded text-lg">
          Button <MdOutgoingMail className='h-7 w-7 ml-4 my-auto'/>
        </button>
      </form>
    </div>
  );
}
