import React from "react";
import { useForm,SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate("/login")
  };
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-800">
          Please Sign In Here
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
            <div className="mb-6">
              <input
                type="text"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "error message",
                  },
                })}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
                placeholder="First name"
              />
              {errors.firstName?.type === "required" && (
                <span className="text-red-600">{errors.firstName.message}</span>
              )}
              {errors.firstName?.type === "minLength" && (
                <span className="text-red-600">{errors.firstName.message}</span>
              )}
            </div>
            <div className="mb-6">
              <input
                type="text"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "error message",
                  },
                })}
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
                placeholder="Last name"
              />
              {errors.lastName?.type === "required" && (
                <span className="text-red-600">{errors.lastName.message}</span>
              )}
              {errors.lastName?.type === "minLength" && (
                <span className="text-red-600">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="mb-6">
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter valid email address",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Email address"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 6,
                  message: "Password minimum length should be six characters",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
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
