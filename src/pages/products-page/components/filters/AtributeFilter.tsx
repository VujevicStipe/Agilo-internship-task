import React, { useEffect } from "react";
import { SelectInput } from "../../../../components/FormInputs";
import { capitalize } from "lodash";

interface AtributeFilterProps {
  data: Filter;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AtributeFilter: React.FC<AtributeFilterProps> = ({ data, onChange }) => {
  const sizes = ["s", "m", "l", "xl", "2xl"];
  const uppercasedSizes = sizes.map((size) => size.toUpperCase());

  const colors = ["white", "black", "red", "Yellow", "green", "Blue"];
  const capitalizedColors = colors.map((color) => capitalize(color));

  const brands = ["medusa", "Medusa accessories"];
  const capitalizedBrands = brands.map((brand) =>
    brand
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );

  const bodyFits = ["slim fit", "regular fit", "Athletic fit"]
  const capitalizedBodyFits = bodyFits.map((bodyFit) => capitalize(bodyFit))

  useEffect(() => {
    console.log(capitalizedBrands);
  }, [capitalizedBrands]);

  return (
    <div className="flex child:mr-4">
      <SelectInput
        name="size"
        placeholder="Size"
        value={data.size}
        options={uppercasedSizes}
        onChange={onChange}
      />
      <SelectInput
        name="color"
        placeholder="Color"
        value={data.color}
        options={capitalizedColors}
        onChange={onChange}
      />
      <SelectInput
        name="brand"
        placeholder="Brand"
        value={data.brand}
        options={capitalizedBrands}
        onChange={onChange}
      />
      <SelectInput
        name="bodyFit"
        placeholder="Body Fit"
        value={data.bodyFit}
        options={capitalizedBodyFits}
        onChange={onChange}
      />
    </div>
  );
};

export default AtributeFilter;
