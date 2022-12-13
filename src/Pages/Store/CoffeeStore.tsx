import React from "react";
import { FcPlus } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";
import { useContextAPI } from "../../Context/CartContext";

interface ItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function CoffeeStore({ id, name, price, imgUrl }: ItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContextAPI();

  const quantity = getItemQuantity(id);

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
        <button
          onClick={() => increaseCartQuantity(id)}
          className="w-full bg-emerald-600 py-2 rounded text-gray-50 font-medium mb-4"
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-2 mb-4">
          <div className="flex justify-center align-middle">
            <AiFillMinusCircle
              onClick={() => decreaseCartQuantity(id)}
              className="text-red-600 h-6 w-6 hover:cursor-pointer"
            />
            <span className="ml-2 mr-2">{quantity} Add to Cart</span>
            <FcPlus
              onClick={() => increaseCartQuantity(id)}
              className="h-6 w-6 hover:cursor-pointer"
            />
          </div>
          <button
            onClick={() => removeFromCart(id)}
            className=" bg-red-500 mt-2 w-20 py-2 rounded text-gray-50 font-medium"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
