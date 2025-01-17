import React from "react";
import { ImBooks } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";
import { Link, useHref } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Cart", href: "/cart" },
    { name: "Orders", href: "/orders" },
    { name: "Check Out", href: "/checkout" },
  ];

  const [isDropDown, setIsDropDown] = useState(false);

  const cartItems = useSelector(state => state.cart.cartItems)

  const {currentUser, logOut} = useAuth()

  const handleLogOut = () => {
    logOut()
  }
  
  return (
    <header className="max-w-screen-2xl mx-auto py-6 ">
      <nav className="flex justify-around items-center">
        <div className="flex items-center gap-10 ">
          <Link to={"/home"}>
            <ImBooks className="size-6" />
          </Link>
          <div className="flex items-center relative rounded-lg ">
            <IoMdSearch className="absolute left-2" />
            <input
              type="text"
              placeholder="Search here"
              className="py-1 px-6 md:px-8 rounded-md focus:outline-none bg-slate-200"
            />
          </div>
        </div>

        <div className="flex items-center md:space-x-5 space-x-4 pl-8 relative">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDown(!isDropDown)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className="size-6 rounded-full ring-2 ring-blue-600"
                  />
                </button>
                {isDropDown && (
                  <div className="bg-gray-200 rounded-md absolute mt-3 left-0 w-48 shadow-lg">
                    <ul className="px-2 py-2">
                      {navigation.map((item) => (
                        <>
                          <li
                            key={item.name}
                            onClick={() => setIsDropDown(false)}
                          >
                            <Link
                              to={item.href}
                              className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-300"
                            >
                              {item.name}
                            </Link>
                          </li>
                          
                          <hr />
                        </>
                      ))}
                      <li onClick={handleLogOut} className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-300">Log out</li>
                    </ul>
                  </div>
                )}{" "}
              </>
            ) : (
              <Link to={"/login"}>
                <FaCircleUser className="size-6 cursor-pointer" />
              </Link>
            )}
          </div>

          <Link to={"/favourites"} className="hidden sm:block" title="Favourites">
            <IoMdHeart className="size-6 cursor-pointer text-red-500" />
          </Link>
          <Link
            to={"/cart"}
            className="bg-primary p-1 sm:px-6 flex items-center rounded-lg gap-3"
          >
            <FaCartShopping className="size-6 cursor-pointer" />
            <span className="text-lg">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
