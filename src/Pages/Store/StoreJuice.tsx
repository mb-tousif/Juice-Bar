import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";

type ItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};


export default function StoreJuice({id, name, price, imgUrl}: ItemProps) { 
    const [quantity, setQuantity] = useState<number>(0)
  return (
    <div className="mx-auto my-auto px-2">
      <img src={imgUrl} alt="Juice Pictures" className="rounded-2xl" />
      <div className="flex mx-auto my-auto">
        <h1 className="text-slate-900 md:font-bold text-lg md:text-2xl p-2 mx-auto my-auto">
          {name}
        </h1>
        <h1 className="text-slate-900 md:font-bold text-lg md:text-2xl p-2 mx-auto my-auto">
          $ {price}
        </h1>
      </div>
      {quantity === 0 ? (
        <button onClick={()=> setQuantity(1)} className="w-full">Add to Cart</button>
      ) : (
        <div className="mt-2 mb-2">
          <div className="flex justify-center align-middle">
            <AiFillMinusCircle className="text-red-600 h-6 w-6 hover:cursor-pointer" />
            <span className="ml-2 mr-2">{quantity} Add to Cart</span>
            <FcPlus className="h-6 w-6 hover:cursor-pointer"/>
          </div>
        </div>
      )}
    </div>
  );
}
