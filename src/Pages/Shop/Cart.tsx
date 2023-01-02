import React from 'react'
import ShoppingCart from '../../Components/Cart/ShoppingCart'
import { useContextAPI } from '../../Context/CartContext';
import cart from '../../Images/shopCart.png'

export default function Cart() {
  const { cartItems } = useContextAPI();
  return (
    <div className="bg-gradient-to-b min-h-[400px] from-[#c1dfc4] to-[#ADCDED]">
      <h1 className="text-xl sm:text-2xl md:text-3xl underline text-center font-bold text-lime-800 pt-2 pb-2">
        My Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="p-4">
          <h1 className="sm:text-2xl text-lg mt-10 text-[#931031] font-semibold text-center">
            Your cart is empty ✨✨✨
          </h1>
          <img src={cart} alt="Cart Trolly" className='w-64 mt-6 mx-auto my-auto' />
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <ShoppingCart key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
}
