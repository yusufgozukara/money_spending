import React from "react";

const Product = ({ product, basket, setBasket }) => {
  const { id, title, price } = product;
  const addBasket = () => {
    console.log("satın al");
  };
  return (
    <>
      <div className="product">
        <h6>{title}</h6>
        <div className="price">${price}</div>
        <div className="actions">
          <button>Sat</button>
          <span className="amount"> 0 </span>
          <button onClick={addBasket}>Satın Al</button>
        </div>

        <style jsx>{`
          .product {
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Product;
