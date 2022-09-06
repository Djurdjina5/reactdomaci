import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import coffeeshop from '../img/coffeeshop.png';
import { Link } from "react-router-dom";

const NavBar = ({cartNum}) => {
  return (
    <div className='navBar'>
        <img className="logo" src={coffeeshop} alt="" />
        <Link to="/">MyStore</Link>
        <Link to="/cart" className="cart-items">
        <BsFillCartFill className="icon-cart"  />
        <div className="cart-num">{cartNum}</div>
      </Link>
    </div>
  )
}

export default NavBar