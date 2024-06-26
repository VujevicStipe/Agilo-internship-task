import React from "react";
import Button from "../../../../components/Button";

interface TypeFilterProps {
  title: string;
  onChange: (type: string) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ title, onChange }) => {
  const types = ["T-Shirt", "Sweatshirt", "backpack", "cup", "socks", "phone Case", "bottle"];
  const capitalizedTypes = types.map((type) =>
    type
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );

  return (
    <div>
      <h4 className="text-start">{title}</h4>
      <div className="flex flex-col items-start">
        {capitalizedTypes.map((type: string) => (
          <Button
            key={type}
            variant="categoryBtn"
            onClick={() => onChange(type)}
          >
            {type}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
