import React from "react";
const Cart = ({ cartItems, onRemoveFromCart, totalPrice }) => {
  return (
    <div className="row my-4">
      <div className="col-md-12">
        <h3 className="display-6 fw-bold my-4">Cart</h3>
        {cartItems.length === 0 ? (
          <p></p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                {item.title} ({item.price})
                <button className="btn btn-outline-danger" onClick={() => onRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
              Total
              <span>{totalPrice}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Cart;