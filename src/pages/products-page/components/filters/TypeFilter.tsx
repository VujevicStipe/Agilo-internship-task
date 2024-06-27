import React from "react";
import Button from "../../../../components/Button";

interface TypeFilterProps {
  title: string;
  onChange: (type: string) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ title, onChange }) => {
  const types = [
    "T-Shirt",
    "Sweatshirt",
    "backpack",
    "cup",
    "socks",
    "phonecase",
    "bottle",
  ];
  const capitalizedTypes = types.map((type) =>
    type
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );

  return (
    <div className="hidden sm:block">
      <h4 className="text-start">{title}</h4>
      <div className="flex flex-col child:min-w-[10rem] items-start">
        <Button variant="category" onClick={() => onChange("")}>Any</Button>
        {capitalizedTypes.map((type: string) => (
          <Button key={type} variant="category" onClick={() => onChange(type)}>
            {type}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
