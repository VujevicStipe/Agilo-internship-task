import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import bannerImg from "../../../../public/assets/banner-img.png";

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="w-full h-[15rem] relative flex">
      <img
        className="w-full h-full object-cover"
        src={bannerImg}
        alt="banner-img"
      />
      <h2 className="absolute-center uppercase font-bold text-primary">
        {title}
      </h2>
      <div className="w-20 h-10 absolute right-0 bottom-4 bg-gray-200 child:w-2/3 cursor-pointer">
        <IoIosArrowRoundForward style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default Banner;
