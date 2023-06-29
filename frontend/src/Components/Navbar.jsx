import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between  h-14 pr-4">
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo Img" className="object-contain h-14 w-28" />
      </div>
      <div className="flex justify-center items-center">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
