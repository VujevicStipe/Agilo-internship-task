import React, { useEffect, useState } from "react";
import axios from "axios";
import { shuffle } from "lodash";
import Banner from "./components/hero/Hero";
import Testimonal from "./components/Testimonal";
import FeaturedProducts from "../../components/FeaturedProducts";
import ProductCard from "../../components/ProductCard";

const HomePageSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const shuffledProducts = shuffle(products).slice(0, 4);
    setFeaturedProducts(shuffledProducts);
  }, [products]);

  return (
    <div className="container">
      <Banner />
      <div className="wrapper">
        <Testimonal />
        <FeaturedProducts
          title="Popular items"
          subTitle="From our Medusa apparel"
        >
          {featuredProducts?.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </FeaturedProducts>
      </div>
    </div>
  );
};

export default HomePageSection;
