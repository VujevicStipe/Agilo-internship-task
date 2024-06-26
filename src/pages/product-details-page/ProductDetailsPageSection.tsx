import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { shuffle } from "lodash";
import { defineID } from "../../util/defineID";
import FeaturedProducts from "../../components/FeaturedProducts";
import ProductCard from "../../components/ProductCard";
import ProductOverview from "./components/productOverview/ProductOverview";
import ProductVariants from "./components/productOverview/components/ProductVariants";
import Modal from "../../components/modal/Modal";

const ProductDetailsPageSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) return null;

  //fetching products
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const definedID = defineID(id);
    axios
      .get(`${apiUrl}/products/${definedID}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const shuffledProducts = shuffle(products).slice(0, 4);

  //making an order
  const [order, setOrder] = useState({
    size: "",
    color: "",
    quantity: 1,
  });
  //reset on product change
  const location = useLocation();
  useEffect(() => {
    console.log('Pathname changed:', location.pathname);
    setOrder({
      size: "",
      color: "",
      quantity: 1,
    });
  }, [location.pathname]);

  useEffect(() => {
    console.log(order)
  }, [order])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "quantity") {
      const newQuantity = parseInt(value);
      setOrder((prevOrder) => ({
        ...prevOrder,
        quantity: newQuantity,
      }));
    } else {
      setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    }
  };
  const handleIncrease = () => {
    const newQuantity = order.quantity + 1;
    setOrder((prevOrder) => ({
      ...prevOrder,
      quantity: newQuantity,
    }));
  };
  const handleDecrease = () => {
    if (order.quantity > 1) {
      const newQuantity = order.quantity - 1;
      setOrder((prevOrder) => ({
        ...prevOrder,
        quantity: newQuantity,
      }));
    }
  };

  //modal after order
  const [showModal, setShowModal] = useState<boolean>(false);

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
          {shuffledProducts?.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </FeaturedProducts>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {product && <h2>{product.brand} {product.type}</h2>}
        {product && <h4>Price{product.price}</h4>}
        {order.size && <h3>Your Size: {order.size}</h3>}
        {order.color && <h3>Your Color: {order.color}</h3>}
        <h3>Quantity: {order.quantity}</h3>
        {product && <h3>Total: {product?.price * order.quantity}</h3>}
      </Modal>
    </div>
  );
};

export default ProductDetailsPageSection;
