import React from 'react'
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const OneProduct = ({ product,onAdd,onRemove } ) => {
  return (
       <div className="card">
      <img className="card-img-top" src={product.url} alt="image" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price}rsd</p>
          </div>
          <>
        <button className="btn"
          onClick={() => onAdd(product.id)}>
          <BsPlusLg/>
        </button>
        <button className="btn"
         onClick={() => onRemove(product.id)}>
          <BsDashLg/>
        </button>
        </>
      </div>
  
  )
}

export default OneProduct