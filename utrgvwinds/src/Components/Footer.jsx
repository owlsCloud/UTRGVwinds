import React from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex gap-2 justify-center">
      <a href="https://www.facebook.com/UTRGVIndoor">
        <FaFacebookF
          className="text-utrgvOrange border rounded-full p-1.5 "
          size="45"
        />
      </a>
      <a href="https://www.instagram.com/utrgvindoor/">
        <AiOutlineInstagram
          className="text-utrgvOrange  border rounded-full p-1"
          size="45"
        />
      </a>
      <a href="#a">
        <AiFillYoutube
          className="text-utrgvOrange  border rounded-full p-1.5"
          size="45"
        />
      </a>
    </div>
  );
}

export default Footer;
