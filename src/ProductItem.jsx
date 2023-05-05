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

};
export default ProductItem;