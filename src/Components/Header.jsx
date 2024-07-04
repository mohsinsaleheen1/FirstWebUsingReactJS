import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] flex justify-between items-center  mx-auto py-1">
          <div className="text-3xl font-bold">FirstWebUseReact</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-xl text-white md:hidden block cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-xl text-white md:hidden block cursor-pointer"
            />
          )}

          <ul className="hidden md:flex gap-5">
            <li className="text-lg text-white cursor-pointer">Home</li>
            <li className="text-lg text-white cursor-pointer">About</li>
            <li className="text-lg text-white cursor-pointer">Contact</li>
            <li className="text-lg text-white cursor-pointer">Services</li>
            <li className="text-lg text-white cursor-pointer">Products</li>
          </ul>
          {/* Responsive Navbar */}
          <ul
            className={`block duration-300 md:hidden fixed bg-black top-[76px] w-full text-center h-screen pt-4
          ${toggle ? "left-[0%]" : "left-[-100%]"}
          `}
          >
            <li className="text-lg text-white cursor-pointer p-3">Home</li>
            <li className="text-lg text-white cursor-pointer p-3">About</li>
            <li className="text-lg text-white cursor-pointer p-3">Contact</li>
            <li className="text-lg text-white cursor-pointer p-3">Services</li>
            <li className="text-lg text-white cursor-pointer p-3">Products</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
