import React from "react";
import { BsCart2 } from "react-icons/bs";
import "./Cart.css";

function Cart({ itemCount }) {
  return (
    <div>
      <BsCart2 size="25" title="View Cart" />
      <span className="text-white itemCount">{itemCount}</span>
    </div>
  );
}

export default Cart;
