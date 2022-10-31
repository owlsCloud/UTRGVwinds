import React from "react";
import banner from "../assets/logo.png";
function Banner() {
  return (
    <div className="flex justify-center ">
      <img src={banner} className="h-44 w-1/3" alt="UTRGVwinds" />
    </div>
  );
}

export default Banner;
