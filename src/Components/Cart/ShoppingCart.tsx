import React from 'react'
import avatar from '../../Images/avatar.png'

export default function ShoppingCart() {
  return (
    <div className='container mx-auto min-h-screen sm:p-4 md:p-8 '>
      <div className="bg-gray-100 md:w-3/5 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
        <div className="flex p-3 border-l-8 border-yellow-600">
          <div className="space-y-1 border-r-2 pr-3">
            <img src={avatar} alt="About" className='mx-auto my-auto max-h-20 border-2 border-emerald-800' />
          </div>
          <div className="flex-1">
            <div className="ml-3 space-y-1 border-r-2 pr-3">
              <div className="text-base font-normal">Item Name</div>
              <div className="text-sm font-normal"><span className="text-xs leading-4 font-normal text-gray-500">Quantity: </span>2</div>
              <div className="text-sm font-normal"><span className="text-xs leading-4 font-normal text-gray-500">Price: </span>$13</div>
            </div>
          </div>
          <div className='h-full'>
            <div className="ml-3 my-5 p-1">
              <div className="text-xs font-semibold text-center"><span className="text-xs font-normal text-gray-500">Total Price: </span>$26</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
