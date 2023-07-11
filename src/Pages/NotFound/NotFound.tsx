import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-center p-7 bg-slate-400 h-screen">
      <div className="my-auto sm:mt-20">
        <h1 className="text-2xl mb-4 text-red-600">
          Oops! We’ve got a problem.
        </h1>
        <div className="flex justify-center text-gray-50">
          <button
            className="w-32 mr-2 mb-2 p-1 bg-green-500 flex items-center justify-center rounded-md shadow-md focus:outline-none"
            onClick={() => navigate(-1)}
          >
            <i className="bx bx-arrow-back w-5"></i>
            <span>Go Back</span>
          </button>
          <Link
            to="/"
            className="w-32 mb-2 flex items-center p-1 justify-center bg-green-500 rounded-md shadow-md focus:outline-none"
          >
            <i className="bx bxs-home w-5"></i>
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}