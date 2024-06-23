import ProductDetailsPageSection from "../pages/product-details-page/ProductDetailsPageSection";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return <ProductDetailsPageSection id={id} />;
};

export default ProductDetailsPage;
