import React from 'react'
import juiceItems from "../../Utilities/juicesData.json"
import StoreJuice from './StoreJuice';

export default function Store() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mt-2 mb-2 text-lime-800">Fresh Juice Store!</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
        {juiceItems.map((item) => (
          <StoreJuice key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}
