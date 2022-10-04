import React from 'react'
import loader from "../../Images/loader.gif"

export default function Loader() {
  return (
    <div className="">
      <img src={loader} alt="Loader" className="max-h-96 mx-auto" />
    </div>
  );
}
