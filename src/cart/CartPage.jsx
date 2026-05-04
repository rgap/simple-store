import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary.jsx";
import React from "react";
import { useCart } from "../providers/CartProvider.jsx";

const CartPage = () => {
  const { items } = useCart();

  return (
    <div className="container">
      <div className="cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        {items.length > 0 && <p className="cart-subtitle">Review your items and proceed to checkout</p>}
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-message">Add some items to your cart to see them here.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="card">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
