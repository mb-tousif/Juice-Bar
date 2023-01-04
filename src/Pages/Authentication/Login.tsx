import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const handleSubmit = (e: React.SyntheticEvent) =>{
        e.preventDefault();
    }
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-800">Please Login Here</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input type="email" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900" placeholder="Email address" />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-2">
            <Link to={"#/"}>Forgot Password?</Link>
          </div>
          <div className="h-0.5 mb-6 bg-slate-600"></div>
          <div className="text-center mb-6">
            <input
              type="checkbox"
              className="h-4 w-4 border-none rounded-sm bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] checked:bg-[#022b53] transition duration-200 mt-1 align-top mr-2 cursor-pointer"
            />
            <label className="inline-block text-gray-800" htmlFor="exampleCheck96">I have read and agree to the terms.</label>
          </div>
          <button type="submit" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] rounded transition ease-in-out m-0 placeholder-teal-900">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
