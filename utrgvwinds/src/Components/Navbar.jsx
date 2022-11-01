import React from "react";

function Navbar() {
  return (
    <div className="w-full ">
      <ul className="flex justify-between gap-2">
        <li className="text-utrgvOrange text-sm">
          <a href="#a">Home</a>
        </li>
        <li className="text-utrgvOrange text-sm">
          <a href="#a">About</a>
        </li>
        <li className="text-utrgvOrange text-sm">
          <a href="#a">Percussion</a>
        </li>
        <li className="text-utrgvOrange text-sm">
          <a href="#a">winds</a>
        </li>
        <li className="text-utrgvOrange text-sm">
          <a href="#a">Colorguard</a>
        </li>
        <li className="text-utrgvOrange text-sm">
          <a href="#a">Contact Us</a>
        </li>
        <li className="text-utrgvOrange text-sm">
          <a href="#a">Store</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
