import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products}) => {
  return (
    <div className='all-products'>
      <OneProduct product={products[0]} />
      <OneProduct product={products[1]} />
      <OneProduct product={products[2]} />
      <OneProduct product={products[3]} />
      <OneProduct product={products[4]} />
       <OneProduct product={products[5]} />
       <OneProduct product={products[6]} />
      <OneProduct product={products[7]} />
      <OneProduct product={products[8]} />
      <OneProduct product={products[9]} />
      <OneProduct product={products[10]} />
       <OneProduct product={products[11]} />
    </div>
  )
}

export default Products