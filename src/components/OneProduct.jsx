import React from 'react'
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const OneProduct = ({ product } ) => {
  return (
       <div className="card">
      <img className="card-img-top" src={product.url} alt="image" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price}rsd</p>
          </div>
          <>
        <a className="btn">
          <BsPlusLg/>
        </a>
        <a className="btn">
          <BsDashLg/>
        </a>
        </>
      </div>
  
  )
}

export default OneProduct