import React, {useState} from 'react'
import juiceItems from "../../Utilities/juicesData.json"
import JuiceStore from './JuiceStore';
import coffeeItems from "../../Utilities/coffeeMilk.json";
import CoffeeStore from './CoffeeStore';
import BowlsStore from './BowlsStore';
import bowlsItems from "../../Utilities/bowls.json";

export default function Store() {
  const [tab, setTab] = useState(1);
  const toggleTab = (id:number ) => {
    setTab(id)
  };
  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-lime-800 mt-2 mb-4">
        Our Juice Bar Items
      </h1>
      <div className="flex justify-center mb-4 text-xl text-[#e9990f]">
        <button
          onClick={() => toggleTab(1)}
          className="font-medium border-b-2 hover:border-[#417932f1] border-transparent px-6 my-2"
        >
          Juice
        </button>
        <button
          onClick={() => toggleTab(2)}
          className="font-medium border-b-2 hover:border-[#417932f1] border-transparent px-6 my-2"
        >
          Bowls
        </button>
        <button
          onClick={() => toggleTab(3)}
          className="font-medium border-b-2 hover:border-[#417932f1] border-transparent px-6 my-2"
        >
          Coffee
        </button>
      </div>
      <div className={tab === 1 ? "container" : "hidden"}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
          {juiceItems.map((item) => (
            <JuiceStore key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={tab === 2 ? "container" : "hidden"}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
          {bowlsItems.map((item) => (
            <BowlsStore key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={tab === 3 ? "container" : "hidden"}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
          {coffeeItems.map((item) => (
            <CoffeeStore key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
