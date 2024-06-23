import React from "react";

const ProductDetailsPageSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) {
    return null;
  }

  return <div>ProductDetailsPageSection</div>;
};

export default ProductDetailsPageSection;
