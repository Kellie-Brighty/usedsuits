import React from "react";
import BackgroundImage from "../assets/imgFive.jpg";
import ImageOne from "../assets/imgOne.jpg";
import ImageTwo from "../assets/imgTwo.jpg";
import ImageThree from "../assets/imgThree.jpg";

const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`, // Replace with your background image URL
  };
  return (
    <div
      style={backgroundStyle}
      className={`abdolute top-0 left-0 w-full bg-cover bg-center `}
    >
      <div className={`w-full h-full top-0 left-0 bg-[#00000073]`}>
        <p className={`text-[56px] font-chelsea text-white text-center`}>
          About us
        </p>

        <div
          className={`md:grid md:grid-cols-2 md:gap-[24px] md:space-y-0 
          items-center justify-center md:p-[100px] p-[50px] space-y-[50px]`}
        >
          <img src={ImageOne} alt="" className={`md:w-[400px] w-[300px]`} />
          <img src={ImageTwo} alt="" className={`md:w-[400px] w-[300px]`} />
          <img src={ImageThree} alt="" className={`md:w-[400px] w-[300px]`} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
