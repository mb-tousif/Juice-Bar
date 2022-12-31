import React from 'react'
import ShoppingCart from '../../Components/Cart/ShoppingCart'
import { useContextAPI } from '../../Context/CartContext';

export default function Cart() {
  const { cartItems } = useContextAPI();
  return (
    <div className="bg-gradient-to-b min-h-[400px] from-[#c1dfc4] to-[#ADCDED]">
      <h1 className="text-xl sm:text-2xl md:text-3xl underline text-center font-bold text-lime-800 pt-2 pb-2">
        My Cart
      </h1>
      {cartItems.map((item) => (
        <ShoppingCart key={item.id} {...item} />
      ))}
    </div>
  );
}
