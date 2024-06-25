import React from "react";

interface ProductOverviewProps {
  product: Product;
  children: React.ReactNode;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({
  product,
  children,
}) => {
  const imagePath = `../../public/assets/${product.type}.png`;

  return (
    <div className="w-full h-[60rem] md:h-[40rem] grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-[35rem] col-span-1 bg-card rounded-lg flex justify-center items-center child:h-2/3">
        <img src={imagePath} alt="" />
      </div>
      <div className="w-full h-[25rem] col-span-1">
        <div className="h-full justify-center md:py-20 md:pl-10 flex flex-col md:flex-col md:justify-between text-start ">
          {" "}
          <h3 className="font-bold">
            {product.brand} {product.type}
          </h3>
          <h4 className="mb-4">{product.price}</h4>
          {children}
          <h5 className="font-bold mt-4">Product details</h5>
          <h5 className="font-bold">Material</h5>
          <h5>{product.material}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
