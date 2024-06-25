import React, { useEffect, useState } from "react";
import { defineID } from "../../util/defineID";
import axios from "axios";

const ProductDetailsPageSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) {
    return null;
  }

  useEffect(() => {
    console.log(id)
    console.log(defineID(id))
  }, [])

  const [product, setProduct] = useState<Product>();
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const definedID = defineID(id)
    axios
      .get(`${apiUrl}/products/${definedID}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return <div>ProductDetailsPageSection</div>;
};

export default ProductDetailsPageSection;
