import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../services/CartContext.jsx"; 
import "./Cart.css";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const cartArray = Object.keys(cart).map((id) => ({
    id,
    ...cart[id],
  }));

  const totalPrice = cartArray.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart">
        <h1 className="cart-title">Your Cart</h1>
        {cartArray.length > 0 ? (
          <>
            <div className="cart-items">
              {cartArray.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div>
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      className="quantity-btn decrement-btn"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn increment-btn"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>
                <strong>Total Price:</strong> ₹{totalPrice}
              </p>
              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty!</p>
            <button
              className="shop-now-btn"
              onClick={() => navigate("/marketplace")}
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
