import React,{useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

type FormValues = {
  email: string;
  password: string;
};
interface CreateLogin {
  email: string;
  password: string;
};

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [loader, setLoader]= useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const checkUser:CreateLogin ={
      email: data.email,
      password: data.password
    }
  const url = "https://juice-bar-server.vercel.app/api/v1/login";
  setLoader(true)
  fetch(url,{
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(checkUser)
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.status ==="success"){
        // console.log(data)
        localStorage.setItem("token", data.token);
        setLoader(false)
        navigate("/store")
        window.location.reload();
      }else{
        navigate("/login")
        setLoader(false)
        }
    });
};

  if(loader){
    return <Loader/>
  }
  
  return (
    <div className="bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] pt-8 pb-8 flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg sm:w-3/5 bg-white max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-lime-800">
          Please Login Here
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          {showPassword ?
          <div className="relative mb-6">
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password is required!" },
                pattern: {
                  value:
                    /^(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d])(.{6,})$/,
                  message: "Enter strong password with minLength six,minNumbers one,minUppercase one, minSymbols one. ",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            <MdOutlineVisibilityOff
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-slate-700 right-0 top-[6px] mr-4 cursor-pointer"
              size={28}
            />
          </div>:
          <div className="relative mb-6">
            <input
              type="text"
              {...register("password", {
                required: { value: true, message: "Password is required!" },
                pattern: {
                  value:
                    /^(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d])(.{6,})$/,
                  message: "Enter strong password with minLength six,minNumbers one,minUppercase one, minSymbols one. ",
                },
              })}
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] bg-clip-padding border-none rounded transition ease-in-out m-0 placeholder-teal-900"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            <MdOutlineVisibility
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-slate-700 right-0 top-[6px] mr-4 cursor-pointer"
              size={28}
            />
          </div>
          }
          <div className="mb-2">
            <Link to={"#/"}>Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED] rounded transition ease-in-out m-0 placeholder-teal-900"
          >
            Login 🥤
          </button>
        </form>
        <div className="h-0.5 mb-2 mt-6 bg-slate-600"></div>
        <div className="mb-2 text-center text-lg">
          New to here ? <Link to={"/signIn"}>Please Sign In.</Link>
        </div>
      </div>
    </div>
  );
};
