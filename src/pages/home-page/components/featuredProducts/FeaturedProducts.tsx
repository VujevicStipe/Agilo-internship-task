import React from "react";
import ProductsList from "./components/ProductsList";

interface FeaturedProductsProps {
  title: string;
  subTitle: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-start">
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <ProductsList />
    </div>
  );
};

export default FeaturedProducts;
