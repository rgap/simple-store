import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary.jsx";
import React from "react";
import { useCart } from "../providers/CartProvider.jsx";

const CartWidget = () => {
  const { items } = useCart();

  return (
    <div className="cart-widget">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        {items.length > 0 && (
          <p className="cart-subtitle">
            {items.length} item{items.length !== 1 ? "s" : ""} in your cart
          </p>
        )}
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3 className="empty-cart-title">Your cart is empty</h3>
          <p className="empty-cart-message">Add some items to your cart to see them here.</p>
        </div>
      ) : (
        <>
          <div className="card">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </>
      )}
    </div>
  );
};

export default CartWidget;
