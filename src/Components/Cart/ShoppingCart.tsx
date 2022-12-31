import React from 'react'
import { useContextAPI } from '../../Context/CartContext';
import bowlsItems from "../../Utilities/bowls.json";
import coffeeItems from "../../Utilities/coffeeMilk.json";
import juiceItems from "../../Utilities/juicesData.json";

interface CartItemProps {
  id: number;
  quantity: number;
};

export default function ShoppingCart({ id, quantity }: CartItemProps) {
  const { removeFromCart }=useContextAPI();
  const juice = juiceItems.find((i) => i.id === id) 
  const bowls =  bowlsItems.find((i) => i.id === id)
  const coffee =  coffeeItems.find((i) => i.id === id);
  const item = { ...juice, ...bowls, ...coffee}
  if (item == null) return null;

  return (
    <div className='mx-auto sm:p-4 md:p-8 '>
      <div className="bg-[#a9dec4c8] md:w-3/5 mx-auto border-gray-500 border rounded-sm text-cyan-800 font-bold mb-0.5 h-30">
        <div className="flex p-3 border-l-8 border-yellow-600">
          <div className="space-y-1 border-r-2 pr-3">
            <img src={item.imgUrl} alt="About" className='mx-auto my-auto max-h-20 border-2 border-emerald-800' />
          </div>
          <div className="flex-1">
            <div className="ml-3 space-y-1 border-r-2 pr-3">
              <div className="text-base font-normal">{item.name}</div>
              <div className="text-sm font-normal"><span className="text-xs leading-4 font-normal">Quantity: </span>{quantity}</div>
              <div className="text-sm font-normal"><span className="text-xs leading-4 font-normal">Price: $</span>{item.price}</div>
            </div>
          </div>
          <div className='flex-1'>
            <div className="ml-3 space-y-1 pr-3">
              <div className="text-xs font-semibold text-center py-8"><span className="text-xs font-normal py-5">Total Price: </span>${item.price}</div>
            </div>
          </div>
          <button onClick={()=> removeFromCart(id)} className='text-sm font-normal'>Remove</button>
        </div>
      </div>
    </div>
  );
}
