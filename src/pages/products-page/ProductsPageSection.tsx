import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ProductsGrid from "./components/ProductsGrid";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import TypeFilter from "./components/filters/TypeFilter";
import AtributeFilter from "./components/filters/AtributeFilter";

const ProductsPageSection: React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>();

  const apiUrl = import.meta.env.VITE_API_URL;

  //fetching products
  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  //filters
  const [filter, setFilter] = useState<Filter>({
    type: "",
    size: "",
    color: "",
    brand: "",
    bodyFit: "",
  });

  //filter handlers
  const handleTypeChange = (type: any) => {
    setFilter({ ...filter, ["type"]: type });
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  //filter function
  const filteredProducts = products?.filter((product) => {
    return (
      (filter.type === "" ||
        product.type.toLowerCase() === filter.type.toLowerCase()) &&
      (filter.size === "" ||
        (product.sizes && product.sizes.includes(filter.size))) &&
      (filter.color === "" ||
        (product.colors && product.colors.includes(filter.color))) &&
      (filter.bodyFit === "" ||
        product.bodyFit === filter.bodyFit) &&
      (filter.brand === "" || product.brand === filter.brand)
    );
  });

  return (
    <div className="container">
      <div className="wrapper">
        <Banner title="our collection" />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="w-full col-span-1">
            <TypeFilter title="Collections" onChange={handleTypeChange} />
          </div>
          <div className="w-full col-span-3">
            <h3 className="text-start">Our Products</h3>
            <div className="w-full h-[1px] mb-2 bg-gray-400 rounded-lg"></div>
            <AtributeFilter data={filter} onChange={handleFilterChange} />
            <ProductsGrid>
              {filteredProducts?.map((item, index) => (
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
