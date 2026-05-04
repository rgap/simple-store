import React from "react";
import { useCart } from "../providers/CartProvider.jsx";

const PLACEHOLDER_IMG = "https://cdn-icons-png.flaticon.com/512/3775/3775364.png";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const imgSrc = item.image || PLACEHOLDER_IMG;

  return (
    <div className="cart-item">
      <img src={imgSrc} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>

        <div className="cart-item-controls">
          <button
            type="button"
            className="quantity-button"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>

          <span className="quantity-display">{item.quantity}</span>

          <button type="button" className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>

          <button type="button" className="remove-button" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
