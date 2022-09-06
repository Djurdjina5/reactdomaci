import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import coffeeshop from '../img/coffeeshop.png';

const NavBar = () => {
  return (
    <div className='navBar'>
        <img class="logo" src={coffeeshop} alt=""  style={{ tintColor: "black"}}/>
        <a href="">MyStore</a>
        <a className="cart-items">
        <BsFillCartFill className="icon-cart"  />
        <div className="cart-num">0</div>
      </a>

    </div>
  )
}

export default NavBar