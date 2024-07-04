import React, { useEffect, useState } from "react";
import axios from "axios";
import { shuffle } from "lodash";
import Banner from "./components/hero/Hero";
import Testimonal from "./components/Testimonal";
import FeaturedProducts from "../../components/FeaturedProducts";
import ProductCard from "../../components/ProductCard";
import LottieLoader from "../../components/LottieLoader";

const HomePageSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();
  const [loading, isLoading] = useState<boolean>(true);

  const apiUrl = import.meta.env.VITE_API_URL;

  //fetching products
  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => {
        setProducts(res.data);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  }, []);

  //shuffle products
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
          {loading ? (
            <LottieLoader path="https://lottie.host/09099916-8855-4fdb-b324-62096270ea85/qLtVKviJzC.json"/>
          ) :
          (featuredProducts?.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          )))}
        </FeaturedProducts>
      </div>
    </div>
  );
};

export default HomePageSection;
