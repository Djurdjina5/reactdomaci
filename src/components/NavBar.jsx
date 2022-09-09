import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import coffeeshop from '../img/coffeeshop.png';
import { Link } from "react-router-dom";

const NavBar = ({cartNum}) => {
  return (
    <div className='navBar'>
      <Link to="/">
        <img className="logo" src="https://www.pngitem.com/pimgs/m/48-485680_coffee-logo-logo-elements-logo-objects-coffee-logo.png" alt="" />
      </Link>
        <Link to="/products">CoffeeShop</Link>
        <Link to="/cart" className="cart-items">
        <BsFillCartFill className="icon-cart"  />
        <div className="cart-num">{cartNum}</div>
      </Link>
    </div>
  )
}

export default NavBar