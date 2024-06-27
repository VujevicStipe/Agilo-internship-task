import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { shuffle } from "lodash";
import { defineId } from "../../util/defineId";
import FeaturedProducts from "../../components/FeaturedProducts";
import ProductCard from "../../components/ProductCard";
import ProductOverview from "./components/productOverview/ProductOverview";
import ProductVariants from "./components/productOverview/components/ProductVariants";
import Modal from "../../components/modal/Modal";

const ProductDetailsPageSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) return null;

  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  //fetching products
  useEffect(() => {
    const definedID = defineId(id);
    axios
      .get(`${apiUrl}/products/${definedID}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  //shuffle products
  useEffect(() => {
    const shuffledProducts = shuffle(products).slice(0, 4);
    setFeaturedProducts(shuffledProducts);
  }, [products]);

  //making an order
  const [order, setOrder] = useState({
    size: "",
    color: "",
    quantity: 1,
  });

  //reset order on route change
  const location = useLocation();
  useEffect(() => {
    setOrder({
      size: "",
      color: "",
      quantity: 1,
    });
  }, [location.pathname]);

  //handle order change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };
  const handleIncrease = () => {
    const newQuantity = order.quantity + 1;
    handleChange({
      target: { name: "quantity", value: newQuantity.toString() },
    } as React.ChangeEvent<HTMLInputElement>);
  };
  const handleDecrease = () => {
    if (order.quantity > 1) {
      const newQuantity = order.quantity - 1;
      handleChange({
        target: { name: "quantity", value: newQuantity.toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  //format total price
  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  return (
    <div className="container">
      <div className="wrapper">
        {product && (
          <ProductOverview product={product}>
            <ProductVariants
              product={product}
              order={order}
              onChange={handleChange}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onClick={() => setShowModal(!showModal)}
            />
          </ProductOverview>
        )}
        <FeaturedProducts
          title="Customers also bought"
          subTitle="From our Medusa apparel"
        >
          {featuredProducts?.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </FeaturedProducts>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {product && (
          <h2>
            {product.brand} {product.type}
          </h2>
        )}
        {product && <h4>Price{product.price}</h4>}
        {order.size && <h3>Your Size: {order.size}</h3>}
        {order.color && <h3>Your Color: {order.color}</h3>}
        <h3>Quantity: {order.quantity}</h3>
        {product && (
          <h3>
            Total: {formatPrice(product.price * order.quantity)} e
          </h3>
        )}
      </Modal>
    </div>
  );
};

export default ProductDetailsPageSection;
