import React from "react";
import bannerImg from "../../../../../public/assets/banner-img.png";
import Benefits from "./Benefits";
import Button from "../../../../components/Button";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-96 flex flex-col items-center">
      <Benefits />
      <img className="w-full h-full min-h-96 object-cover" src={bannerImg} alt="banner-img" />
      <div className="absolute top-1/2 w-full max-w-1350 px-4 flex flex-col justify-start items-start not-last-child:text-white last-child:mt-8">
        <h3>FASHION THAT SPEAKS</h3>
        <h1>Style for every story</h1>
        <Button variant="primaryBtn">Shop now</Button>
      </div>
    </div>
  );
};

export default Banner;
