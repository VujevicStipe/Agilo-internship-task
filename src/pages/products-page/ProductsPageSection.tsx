import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ProductsGrid from "./components/ProductsGrid";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const ProductsPageSection: React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>();
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <Banner title="our collection" />
        <div className="grid grid-cols-4 gap-2">
          <div className="w-full col-span-1">filteri</div>
          <div className="w-full col-span-3">
            <ProductsGrid>
              {products?.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </ProductsGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageSection;
