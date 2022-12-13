import React from 'react'
import { Link } from 'react-router-dom';
import juiceItems from "../../Utilities/juicesData.json"
import JuiceStore from './JuiceStore';
import coffeeItems from "../../Utilities/coffeeMilk.json";
import CoffeeStore from './CoffeeStore';
import BowlsStore from './BowlsStore';
import bowlsItems from "../../Utilities/bowls.json";

export default function Store() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mt-2 mb-2 text-lime-800">Fresh Juice Store!</h1>
      <ul className="flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3" role="tablist">
        <li className="nav-item mx-auto my-auto" role="presentation">
          <Link
            to="store/juice"
            className="w-full font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent">
            Juice
          </Link>
          <Link
            to="store/bowl"
            className="w-full font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent">
            Bowls
          </Link>
          <Link
            to="store/coffee"
            className="w-full font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent">
            Coffee
          </Link>
        </li>
      </ul>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
        {juiceItems.map((item) => (
          <JuiceStore key={item.id} {...item} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
        {bowlsItems.map((item) => (
          <BowlsStore key={item.id} {...item} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
        {coffeeItems.map((item) => (
          <CoffeeStore key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
