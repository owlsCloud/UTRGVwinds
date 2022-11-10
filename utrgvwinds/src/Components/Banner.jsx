import React from "react";
import banner from "../assets/logo.png";
function Banner() {
  return (
    <div className="flex justify-center ">
      <img src={banner} className=" w-full lg:h-64 lg:w-1/4" alt="UTRGVwinds" />
    </div>
  );
}

export default Banner;
