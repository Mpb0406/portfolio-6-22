import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen transition duration-500 ease bg-blue shadow-md flex flex-col justify-start ${
        open ? "h-6/8" : "h-20"
      } md:flex-row md:items-center md:justify-between md:h-min duration-700 z-10`}>
      <span className="font-display ml-5 mt-5 mb-10 md:my-5 text-4xl text-white cursor-pointer hover:text-yellow-400 duration-300">
        Mike Bolloskis
      </span>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-3xl text-white hover:text-yellow-400 absolute top-5 right-5 md:hidden">
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <ul
        className={`md:flex md:mr-3 justify-between text-white ml-5 self-center text-center ${
          !open && "hidden"
        }`}>
        <li className="my-10 md:my-3 md:mx-5 font-semibold text-xl hover:text-yellow-400 duration-300">
          <a href="#bio">About</a>
        </li>
        <li className="my-10 md:my-3 md:mx-5 font-semibold text-xl hover:text-yellow-400 duration-300">
          <a href="#work">Projects</a>
        </li>
        <li className="my-10 md:my-3 md:mx-5 font-semibold text-xl hover:text-yellow-400 duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
