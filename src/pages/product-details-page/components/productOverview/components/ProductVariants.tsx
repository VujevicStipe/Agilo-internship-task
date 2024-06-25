import React from "react";
import { SelectInput, TextInput } from "../../../../../components/FormInputs";
import Button from "../../../../../components/Button";

interface ProductVariantsProps {
  product: Product;
  quantity: number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onClick: () => void;
}

const ProductVariants: React.FC<ProductVariantsProps> = ({
  product,
  quantity,
  onChange,
  onIncrease,
  onDecrease,
  onClick,
}) => {
  if (!product) return null;

  return (
    <div className="last-child:mt-8">
      {product.sizes && (
        <SelectInput
          name="size"
          placeholder="Size"
          options={product.sizes}
          onChange={onChange}
        />
      )}
      {product.colors && (
        <SelectInput
          name="color"
          placeholder="Color"
          options={product.colors}
          onChange={onChange}
        />
      )}
      <div className="relative">
        <div className="absolute-vertical-center left-0">
          {" "}
          <Button variant="incrementBtn" onClick={onDecrease}>
            -
          </Button>
        </div>
        <TextInput name="quantity" onChange={onChange} value={quantity} />
        <div className="absolute-vertical-center right-0">
          <Button variant="incrementBtn" onClick={onIncrease}>
            +
          </Button>
        </div>
      </div>
      <Button variant="secondaryBtn" onClick={onClick}>
        Add to cart +
      </Button>
    </div>
  );
};

export default ProductVariants;
