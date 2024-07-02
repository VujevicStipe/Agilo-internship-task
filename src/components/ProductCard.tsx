import React from "react";
import { Link } from "react-router-dom";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const imagePath = `/assets/${product.type}.png`;
  return (
    <Link to={`/product/:${product.id}`}>
      <div className="w-[100%] flex flex-col items-start rounded-lg not-first-child:px-4 text-start">
        <div className="w-full h-[35rem] sm:h-[30rem] md:h-[25rem] bg-card rounded-lg flex justify-center items-center">
          <img src={imagePath} alt="" />
        </div>
        <h5 className="uppercase mt-2 font-bold">
          {product.brand} {product.type}
        </h5>
        <h6>{product.price}e</h6>
        <div className="flex space-x-2 py-2 pb-4">
          {product?.colors.map((color, index) => (
            <span
              key={index}
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
