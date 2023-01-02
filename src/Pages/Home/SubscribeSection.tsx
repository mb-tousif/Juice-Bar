import React from "react";
import styles from "../../Style/Home.module.css";

export default function SubscribeSection() {
  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    window.alert("Subscription is done");
  };
  return (
    <div className="p-2 pb-6 sm:p-4">
      <div className={`${styles.subscribeBackground} py-20 rounded-2xl shadow-2xl`}>
        <div className="text-white max-w-7xl mx-auto px-10 lg:px-20 justify-center items-center text-center ">
          <h2 className="sm:text-4xl text-2xl font-bold">Subscribe for Juice Bar 🥤 Offers</h2>
          <p className="font-medium mt-3 mb-10">
            If you want to get notify for our Offers. Please enter your
            <b>Email</b> here. We will send email to <br /> you for every Promotional Offers.
          </p>
          <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 justify-center">
            <input
              type="email"
              className="py-3 px-6 outline-none text-blue-900 font-medium w-full  md:w-[50%] rounded-r-full md:rounded-r-none  rounded-l-full placeholder-blue-900"
              placeholder="Enter your Email"
            />
            <button onClick={(e)=>handleSubscribe(e)} className="py-3 px-10 bg-lime-800 rounded-l-full md:rounded-l-none rounded-r-full font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
