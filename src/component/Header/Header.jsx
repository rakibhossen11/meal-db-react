import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-400 flex justify-between w-full">
      <h3 className="text-3xl p-4">Resturent Park</h3>
      <nav >
        <ul className="font-bold text-2xl flex gap-5 p-4 justify-center">
          <Link to="/foods">Foods</Link>
          <Link to="/food">Food</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
