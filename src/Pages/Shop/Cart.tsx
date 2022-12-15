import React from 'react'
import ShoppingCart from '../../Components/Cart/ShoppingCart'
import { useContextAPI } from '../../Context/CartContext';

export default function Cart() {
  const { cartItems } = useContextAPI();
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl underline text-center font-bold text-lime-800 mt-2 mb-2">
        My Cart
      </h1>
      {cartItems.map((item) => (
        <ShoppingCart key={item.id} {...item} />
      ))}
    </div>
  );
}
