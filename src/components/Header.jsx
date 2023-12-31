import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div
      className={`md:px-[100px] md:py-[50px] px-[20px] py-[10px] flex items-center justify-between font-chelsea`}
    >
      <p className={`font-chelsea text-white text-[26px]`}>USEDSUITS</p>

      <div
        className={`font-chelsea hidden md:flex items-center justify-between 
        text-[16px] space-x-[40px] font-[700] text-white`}
      >
        <p className={`cursor-pointer`}>Home</p>
        <p className={`cursor-pointer`}>Telegram</p>
        <p className={`cursor-pointer`}>Twitter</p>
        <p className={`cursor-pointer`}>Contract</p>
        <p className={`cursor-pointer`}>Chart</p>
      </div>
    </div>
  );
};

export default Header;
