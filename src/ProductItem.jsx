import React, { useState } from "react";
import Cart from "./Cart";

const ProductItem = ({ product, resetClickedProduct }) => {
  const { image, category, title, description, price, rating } = product;

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
    };

    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const onRemoveFromCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice - item.price);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt={title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4>{category}</h4>
          <h1>{title}</h1>
          <h3 className="display-6 fw-bold my-4">${price}</h3>
          <p className="lead-fw-bolder">
            Rating {rating && rating.rate}
            <i className="fa fa-star"></i>{" "}
          </p>
          <p className="lead">{description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={addToCart}>
            Add to Cart
          </button>
          <button className="btn btn-dark ms-2 px-3 py-2" onClick={resetClickedProduct}>
                           Back to Products
           </button>
        </div>
      </div>
      <Cart cartItems={cartItems} totalPrice={totalPrice} onRemoveFromCart={onRemoveFromCart} />
    </>
  );

};
export default ProductItem;