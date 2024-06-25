import React from 'react'
import { LuUser2 } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const NavBar: React.FC = () => {
  return (
    <div className='hidden sm:flex w-fit items-center justify-between child:ml-4 child:h-5 child:w-5 child:cursor-pointer '>
        <LuUser2 />
        <LuBell />
        <LuHeart />
        <HiOutlineShoppingBag />
    </div>
  )
}

export default NavBar