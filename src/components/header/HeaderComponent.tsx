import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/Logotype.svg";
import NavBar from "./components/NavBar";
import BurgerMenu from "./components/BurgerMenu";

const HeaderComponent: React.FC = () => {
  return (
    <div className="w-full h-auto flex items-center justify-between py-5 child:min-w-7">
      <BurgerMenu />
      <NavLink to={"./"}>
        <img className="ml-16" src={logo} alt="logo" />
      </NavLink>
      <NavBar  />
    </div>
  );
};

export default HeaderComponent;
