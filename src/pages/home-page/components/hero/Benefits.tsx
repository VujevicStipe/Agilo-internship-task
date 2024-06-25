import React from "react";
import { IoMdCart } from "react-icons/io";
import { IoIosReturnLeft } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";

const Benefits: React.FC = () => {
  return (
    <div className="hidden sm:flex w-full h-fit bg-black justify-center  py-2">
      <div className="hidden px-4 sm:flex max-w-1350 w-full justify-between child:text-white child:flex child:items-center child:child:mr-2">
        <h5>
          <IoMdCart />
          FREE SHIPPING & RETURNS
        </h5>
        <h5>
          <IoIosReturnLeft />
          100 DAY RETURN POLICY
        </h5>
        <h5>
          <FaEuroSign />
          BUY NOW PAY LATER
        </h5>
      </div>
    </div>
  );
};

export default Benefits;
