import React, { useEffect, useState } from "react";
import Banner from "./components/hero/Hero";
import Testimonal from "./components/Testimonal";
import FeaturedProducts from "../../components/FeaturedProducts";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const HomePageSection: React.FC = () => {
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
      <Banner />
      <div className="wrapper">
        <Testimonal />
        <FeaturedProducts
          title="Popular items"
          subTitle="From our Medusa apparel"
        >
          {products?.slice(0, 4).map((item) => (
            <ProductCard key={item.type} product={item} />
          ))}
        </FeaturedProducts>
      </div>
    </div>
  );
};

export default HomePageSection;
