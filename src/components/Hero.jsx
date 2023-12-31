import React from "react";
import BackgroundImage from "../assets/imgOne.jpg";
import Header from "./Header";
import Logo from "../assets/logo.png";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`, // Replace with your background image URL
  };
  return (
    <div
      style={backgroundStyle}
      className={`abdolute top-0 left-0 w-full bg-cover bg-center`}
    >
      <div className={`w-full h-full top-0 left-0 bg-[#00000073]`}>
        <Header />
        <div className={`md:flex md:justify-around items-center`}>
          <img src={Logo} alt="" className={`w-[500px]`} />

          <div className={`pt-[100px] pb-[200px] px-[50px]`}>
            <p
              className={`text-[66px] font-chelsea text-white text-left md:w-[500px]`}
            >
              A Gently Used Suits in 1920s
            </p>

            <p
              className={`text-[21px] text-white font-[700] font-chelsea my-[50px]`}
            >
              $USEDSUITS
            </p>

            <div className={`flex`}>
              <div
                className={`bg-black border border-[#fff] p-[10px] px-[30px] rounded-full cursor-pointer`}
              >
                <p className={`font-chelsea text-white text-[21px] font-[400]`}>
                  TELEGRAM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
