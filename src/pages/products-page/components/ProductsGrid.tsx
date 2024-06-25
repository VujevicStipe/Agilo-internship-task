import React from "react";

const ProductsGrid: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="w-full h-fit grid grid-cols-3 gap-3">
    {children}
  </div>;
};

export default ProductsGrid;
