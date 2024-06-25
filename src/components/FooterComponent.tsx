import React from "react";
import logo from "../../public/assets/Logotype.svg";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const FooterComponent: React.FC = () => {
  return (
    <div className="w-full h-fit px-4 flex flex-col justify-start items-start my-12 child:mb-8 md:flex-row md:justify-between md:items-start">
      <img className="w-48 h-auto" src={logo} alt="logo" />
      <div className="w-fit h-fit flex flex-col child:mb-8 sm:flex-row sm:not-last-child:mr-12">
        <div className="flex flex-col items-start min-w-36 not-first-child:cursor-pointer">
          <h4 className="mb-8">CUSTOMER CARE</h4>
          <h4>Help & Contact</h4>
          <h4>Partner program</h4>
          <h4>Creator Collaborations</h4>
          <h4>Delivery area</h4>
          <h4>Second-Hand</h4>
          <h4>Outlet</h4>
        </div>
        <div className="flex flex-col items-start min-w-36 not-first-child:cursor-pointer">
          <h4 className="mb-8">SECURE SHOPPING</h4>
          <h4>Your Data is secure with us</h4>
        </div>
      </div>
      <div className="flex child:w-auto child:h-7 not-first-child:ml-4 child:cursor-pointer">
        <FaFacebook />
        <AiFillInstagram />
        <FaTwitter />
        <FaYoutube />
        <FaPinterest />
        <FaTiktok />
      </div>
    </div>
  );
};

export default FooterComponent;
