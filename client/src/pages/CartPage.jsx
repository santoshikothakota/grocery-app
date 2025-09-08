import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import "./Cart.css";

const Cart = () => {
  const { t } = useTranslation();
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useAppContext();

  const [selectedPayment, setSelectedPayment] = useState("cod");

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handlePayment = () => {
    if (selectedPayment === "cod") {
      alert("🧾 " + t("cart.order_success_cod"));
      clearCart();
    } else {
      alert("💳 " + t("cart.redirect_payment"));
      // ✅ Later: Integrate Razorpay or any payment gateway here
    }
  };

  const paymentLabel =
    selectedPayment === "online"
      ? t("cart.proceed_online")
      : t("cart.place_order");

  return (
    <div className="cart-container">
      <h2>🛒 {t("cart.title")}</h2>

      {cart.length === 0 ? (
        <p className="empty">{t("cart.empty")}</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>
                    ₹{item.price} × {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    {t("cart.remove")}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p className="total">
              🧾 {t("cart.total")}: ₹{total.toFixed(2)}
            </p>
            <button className="clear-btn" onClick={clearCart}>
              {t("cart.clear")}
            </button>
          </div>

          <div className="payment-section">
            <h3>{t("cart.choose_payment")}</h3>

            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={() => setSelectedPayment("cod")}
                />
                {t("cart.cod")}
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={selectedPayment === "online"}
                  onChange={() => setSelectedPayment("online")}
                />
                {t("cart.online")}
              </label>
            </div>

            <button
              className="pay-btn"
              onClick={handlePayment}
              disabled={cart.length === 0}
            >
              {paymentLabel} ₹{total.toLocaleString("en-IN")}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
