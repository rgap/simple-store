import CartWidgetWrapper from "./CartWidgetWrapper.jsx";
import CheckoutWidget from "./CheckoutWidget.jsx";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="container">
      <div className="checkout-header">
        <h1 className="checkout-title">Finalizar Compra</h1>
        <p className="checkout-subtitle">Revisa tu carrito y completa tu compra</p>
      </div>

      <div className="checkout-layout">
        <div className="checkout-card">
          <h2 className="checkout-widget-title">Carrito de Compras</h2>
          <CartWidgetWrapper />
        </div>

        <div>
          <CheckoutWidget />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
