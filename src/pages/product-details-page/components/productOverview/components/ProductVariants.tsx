import React from "react";
import { SelectInput, TextInput } from "../../../../../components/FormInputs";
import Button from "../../../../../components/Button";

interface ProductVariantsProps {
  product: Product;
  order: Order;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onClick: () => void;
}

const ProductVariants: React.FC<ProductVariantsProps> = ({
  product,
  order,
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
          value={order.size}
          options={product.sizes}
          onChange={onChange}
        />
      )}
      {product.colors && (
        <SelectInput
          name="color"
          placeholder="Color"
          value={order.color}
          options={product.colors}
          onChange={onChange}
        />
      )}
      <div className="relative">
        <div className="absolute-vertical-center left-0">
          {" "}
          <Button variant="increment" onClick={onDecrease}>
            -
          </Button>
        </div>
        <TextInput name="quantity" onChange={onChange} value={order.quantity} />
        <div className="absolute-vertical-center right-0">
          <Button variant="increment" onClick={onIncrease}>
            +
          </Button>
        </div>
      </div>
      <Button variant="secondary" onClick={onClick}>
        Add to cart +
      </Button>
    </div>
  );
};

export default ProductVariants;
