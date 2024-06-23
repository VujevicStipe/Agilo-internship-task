import React from "react";
import testimonalImg from '../../../../public/assets/testimonal-img.png'
import Button from "../../../components/Button";

const Testimonal: React.FC = () => {
  return (
    <div className="w-full h-fit min-h-[40rem] flex child:w-1/2">
      <div className="bg-purple text-primary px-1 sm:px-8 md:px-16 flex flex-col justify-center items-start text-start last-child:mt-4">
        <h4>Emily C.</h4>
        <h3>Unleash Your Potential with High-Performance Apparel</h3>
        <Button variant="primaryBtn">Find Out</Button>
      </div>
      <img className="min-w-[20] object-cover object-right-bottom" src={testimonalImg} alt="testimonal-img" />
    </div>
  );
};

export default Testimonal;
