import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

export default function Header() {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <nav className="bg-lime-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-auto">
            <div className="flex mx-auto my-auto">
              <img className="h-8 w-8 ml-4" src={logo} alt="Logo" />
              <h1 className="ml-6 text-white px-3 py-2 justify-end rounded-md text-lg md:text-xl font-medium">
                Fresh Juice Bar
              </h1>
            </div>
            <div className="hidden mx-auto my-auto md:block">
              <div className="flex justify-end -mr-2 items-baseline">
                <Link
                  to="/"
                  className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  About
                </Link>
                <Link
                  to="/store"
                  className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Store
                </Link>
                <Link
                  to="/wishList"
                  className="text-white mx-auto my-auto ml-2 mr-4 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  <AiFillHeart className="w-7 h-7" />
                </Link>
                <Link
                  to="/cart"
                  className="text-white mx-auto my-auto justify-end rounded-md text-base md:text-lg font-medium"
                >
                  <FaShoppingCart className="w-7 py-0.5 h-7" />
                </Link>
              </div>
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className="-mr-2 flex md:hidden">
            {open ? (
              <AiOutlineClose className="w-8 h-8 text-gray-50" />
            ) : (
              <GiHamburgerMenu className="w-8 h-8 text-gray-50" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-20 bg-lime-900 w-full opacity-90`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/store"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Store
          </Link>
          <Link
            to="/wishList"
            className="text-white block px-3 py-2 text-base font-medium"
          >
            <AiFillHeart className="w-7 h-7" />
          </Link>
          <Link
            to="/cart"
            className="text-white block px-3 py-2 text-base font-medium"
          >
            <FaShoppingCart className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
