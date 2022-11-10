import React from "react";
import { BsList } from "react-icons/bs";
function Navbar() {
  return (
    <div className="w-full invisible lg:visible">
      <div>
        <BsList className="visible lg:invisible" color="white" size="21" />
      </div>
      <ul className="flex justify-between ">
        <li className="text-utrgvOrange text-xl m-auto ">
          <a href="#a">Home</a>
        </li>
        <li className="text-utrgvOrange text-xl m-auto">
          <a href="#a">About</a>
        </li>
        <li className="text-utrgvOrange text-xl m-auto">
          <a href="#a">Percussion</a>
        </li>
        <li className="text-utrgvOrange text-xl m-auto">
          <a href="#a">Winds</a>
        </li>
        <li className="text-utrgvOrange text-xl m-auto ">
          <a href="#a">Colorguard</a>
        </li>
        <li className="text-utrgvOrange text-xl m-auto">
          <a href="#a">Contact Us</a>
        </li>
        <li className="text-utrgvOrange text-xl m-auto">
          <a href="#a">Store</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
