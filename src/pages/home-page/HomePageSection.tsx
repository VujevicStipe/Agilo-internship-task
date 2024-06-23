import React from "react";
import Banner from "./components/banner/Banner";
import Testimonal from "./components/Testimonal";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";

const HomePageSection: React.FC = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center child:mb-14">
      <Banner />
      <div className="w-full max-w-1350 h-fit flex flex-col px-4 child:mb-14">
        <Testimonal />
        <FeaturedProducts
          title="Popular items"
          subTitle="From our Medusa apparel"
        />
      </div>
    </div>
  );
};

export default HomePageSection;
