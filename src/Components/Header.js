import React from "react";

const Header = () => {
  return (
    <nav className="bg-cyan-500 shadow">
      <ul className="flex justify-end gap-x-10 text-white mr-5">
        <li className="m-3 font-semibold text-xl">
          <a href="#">About</a>
        </li>
        <li className="m-3 font-semibold text-xl">
          <a href="#">Projects</a>
        </li>
        <li className="m-3 font-semibold text-xl">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
