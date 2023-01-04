import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-800">Please Sign In Here</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
            <div className="mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
                placeholder="First name"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Password"
            />
          </div>
          <div className="text-center mb-6">
            <input
              type="checkbox" id="subscribe"
              className="h-4 w-4 border-none rounded-sm bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] checked:bg-[#022b53] transition duration-200 mt-1 align-top mr-2 cursor-pointer"
            />
            <label htmlFor="subscribe" className="form-check-label inline-block text-gray-800">
              Subscribe to our newsletter
            </label>
          </div>
          <button
            type="submit"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] rounded transition ease-in-out m-0 placeholder-teal-900"
          >
            Sign up 🥤
          </button>
        </form>
        <div className="h-0.5 mb-2 mt-6 bg-slate-600"></div>
        <div className="mb-2 text-center text-lg">
         Already Sign up ? <Link to={"/login"}>Login now </Link>
        </div>
      </div>
    </div>
  );
}
