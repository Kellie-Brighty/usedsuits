import React from "react";
import BackgroundImage from "../assets/imgFour.jpg";

const Tokenomics = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`, // Replace with your background image URL
  };
  return (
    <div
      style={backgroundStyle}
      className={`abdolute top-0 left-0 w-full bg-cover bg-center`}
    >
      <div className={`w-full h-full top-0 left-0 bg-[#00000073]`}>
        <p className={`text-[56px] font-chelsea text-white text-center`}>
          Tokenomics
        </p>

        <div
          className={`md:flex  md:space-y-0 
          items-center justify-center md:p-[100px] p-[50px] space-y-[50px] md:space-x-[40px]`}
        >
          <div
            className={`border-[3px] border-[#E6C7EB] md:p-[20px] md:px-[40px] space-y-[80px]`}
          >
            <p className={`text-[31px] font-chelsea text-white text-center`}>
              Buy / Sell % Tax
            </p>
            <p className={`text-[106px] font-chelsea text-white text-center`}>
              0/0
            </p>
            <p className={`text-[31px] font-chelsea text-white text-center`}>
              Use low slippage!
            </p>
          </div>
          <div
            className={`border-[3px] border-[#E6C7EB] md:p-[20px] md:px-[40px] space-y-[80px]`}
          >
            <p className={`text-[31px] font-chelsea text-white text-center`}>
              Liquidity
            </p>
            <p
              className={`md:text-[60px] text-[80px] font-chelsea text-white text-center`}
            >
              Burned
            </p>
          </div>
          <div
            className={`border-[3px] border-[#E6C7EB] md:p-[20px] md:px-[40px] space-y-[80px]`}
          >
            <p className={`text-[31px] font-chelsea text-white text-center`}>
              Contract
            </p>
            <p
              className={`md:text-[60px] text-[40px] font-chelsea text-white text-center`}
            >
              Renounced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
