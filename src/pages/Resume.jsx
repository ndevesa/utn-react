// Resume.jsx
import React, { useContext } from "react";
import { CartContext } from "../components/cart/CartContext";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

function Resume() {
  const { cart, removeFromCart } = useContext(CartContext);

  /* Calcular total */
  const TotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += Math.floor(item.price, 2);
    });
    return total;
  };
  const total = TotalPrice();

  /* Verificar si existe mas de un producto igual en el cart */
  const cartItemsCount = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id] += 1;
    } else {
      acc[item.id] = 1;
    }
    return acc;
  }, {});

  return (
    <div className="container">
      <div className="row border-bottom mt-5 mb-3">
        <div className="col">
          <h1 className="display-6 text-center text-md-start">Cart Summary</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {total ? (
            <p>
              Total <span className="fw-bold">${TotalPrice()}</span>
            </p>
          ) : (
            <>
              <p className="fw-bold ">Your cart is empty.</p>
              <button className="btn-dark">
                <Link to="/products">Go back to products</Link>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="row justify-content-center">
        {cart.map((item) => (
          <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
            <div className="product card border-0">
              <div className="card-body p-4">
                {/* Solo mostrar la cantidad si existe mas de un producto */}
                {cartItemsCount[item.id] > 1 ? (
                  <small>Cantidad: {cartItemsCount[item.id]}</small>
                ) : null}

                <div className="productImage">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="100"
                    className="img-fluid d-block mx-auto mb-3"
                  />
                </div>
                <h6>{item.title}</h6>
                <h4 className="fw-bold my-4">{"$" + item.price}</h4>
                <button
                  className="btn-secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove <TiDeleteOutline size="20" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
