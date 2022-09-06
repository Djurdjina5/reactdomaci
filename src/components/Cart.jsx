import React from "react";
import OneProduct from "./OneProduct";

function Cart({ products, onAdd, onRemove }) {
  let total = 0;
  return (
    // <div>Your cart is emty</div>
    <>
      <div className="all-products">
        {products.map(
          (product) => (
            (total += product.price * product.amount),
            (
              <OneProduct
                product={product}
                key={product.id}
                inCart={1}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            )
          )
        )}
      </div>
      {total === 0 ? (
    <></>
      ) : (
        <>
        <div className="container">
          <div className="div-order">
            <h2 className="txt-your-order">Your order</h2>
            <table className="table-order">
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Price</th>
              </tr>
              {products.map((product) => (
                <>
                  <tr>
                    <td>{product.title}</td>
                    <td>{product.amount}</td>
                    <td>{product.price}rsd</td>
                  </tr>
                </>
              ))}
            </table>
            <h3 className="txt-total">Total: {total}rsd</h3>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
