import React from "react";
import OneProduct from "./OneProduct";

function Cart({ products, onAdd, onRemove }) {
  let total = 0;
  return (
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
    <div className="empty">
      <h2>Vaša korpa je prazna.</h2> 
      <h3>Vratite se u prodavnicu.</h3>
    </div>
      ) : (
        <>
        <div className="container">
          <div className="div-order">
            <h2 className="txt-your-order">Vaša porudžbina</h2>
            <table className="table-order">
              <tr>
                <th>Proizvod</th>
                <th>Količina</th>
                <th>Cena</th>
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
            <h3 className="txt-total">Ukupno: {total}rsd</h3>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
