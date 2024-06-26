import React from "react";
import { Link } from 'react-router-dom';
import Benefits from "./Benefits";
import Button from "../../../../components/Button";
import bannerImg from "../../../../../public/assets/hero-img.png";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-96 flex flex-col items-center">
      <Benefits />
      <img
        className="w-full h-full min-h-96 object-cover"
        src={bannerImg}
        alt="banner-img"
      />
      <div className="absolute top-1/2 w-full max-w-1350 px-4 flex flex-col justify-start items-start not-last-child:text-white last-child:mt-8">
        <h3>FASHION THAT SPEAKS</h3>
        <h1>Style for every story</h1>
        <Link to="/products">
          <Button variant="primary">Shop now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
