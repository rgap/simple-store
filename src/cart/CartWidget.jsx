import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary.jsx";
import React from "react";
import { useCart } from "../providers/CartProvider.jsx";

const CartWidget = () => {
  const { items } = useCart();

  return (
    <div className="cart-widget">
      <div className="cart-header">
        <h2 className="cart-title">Carrito de Compras</h2>
        {items.length > 0 && (
          <p className="cart-subtitle">
            {items.length} producto{items.length !== 1 ? "s" : ""} en tu carrito
          </p>
        )}
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3 className="empty-cart-title">Tu carrito está vacío</h3>
          <p className="empty-cart-message">Agrega productos a tu carrito para verlos acá.</p>
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
