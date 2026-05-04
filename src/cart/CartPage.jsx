import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary.jsx";
import React from "react";
import { useCart } from "../providers/CartProvider.jsx";

const CartPage = () => {
  const { items } = useCart();

  return (
    <div className="container">
      <div className="cart-header">
        <h1 className="cart-title">Carrito de Compras</h1>
        {items.length > 0 && <p className="cart-subtitle">Revisa tus productos y procede al pago</p>}
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="empty-cart-title">Tu carrito está vacío</h2>
          <p className="empty-cart-message">Agrega productos a tu carrito para verlos acá.</p>
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
