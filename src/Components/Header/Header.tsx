import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { useContextAPI } from "../../Context/CartContext";
import useUser from "../../Hooks/useUser";

export default function Header() {
  const [token] = useUser();
  const [open, setOpen] = useState<Boolean>(false);
  const { cartQuantity } = useContextAPI();
  const handleSignOut =()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <nav className="bg-[#184f18f3] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-auto">
            <div className="flex mx-auto my-auto">
              <img className="h-8 w-8 ml-4" src={logo} alt="Logo" />
              <h1 className="ml-6 text-white px-3 py-2 justify-end rounded-md text-lg md:text-xl font-medium">
                Fresh Juice Bar
              </h1>
            </div>
            <div className="hidden mx-auto my-auto sm:block">
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
                  to="/cart"
                  className="flex text-white mx-auto my-auto justify-end rounded-md text-base md:text-lg font-medium"
                >
                  <FaShoppingCart className="w-7 py-0.5 h-7" />
                  <span className="px-1.5 ml-1.5 text-center align-baseline font-bold bg-red-600 text-white rounded">
                    {cartQuantity}
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Contact
                </Link>
                {token ? (
                  <Link
                    to="/"
                    className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                    onClick={()=>{handleSignOut()}}
                  >
                    Sign Out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className="-mr-2 flex sm:hidden">
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
        <div className="px-2 pt-2 sm:hidden pb-3 space-y-1 sm:px-3">
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
            to="/cart"
            className="flex text-white px-3 py-2 text-base font-medium"
          >
            <FaShoppingCart className="w-7 h-7" />
            <span className="px-1.5 ml-1 text-center font-bold bg-yellow-400 rounded">
              {cartQuantity}
            </span>
          </Link>
          <Link
            to="/contact"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          {token ? (
            <Link
              to="/"
              className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
              onClick={()=>{handleSignOut()}}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
