import "tailwindcss/tailwind.css";
import React from "react";
import SignIn from "./SignIn";
import homepage from "../images/homepage-3.png";

const Body = () => {
  return (
    <div className="flex">
      <SignIn />
      <div className="flex-1 bg-[#8ed3d7]">
        <img src={homepage} alt="HomePage Img" />
      </div>
    </div>
  );
};

export default Body;
