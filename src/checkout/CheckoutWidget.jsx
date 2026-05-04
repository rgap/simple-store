import Button from "../components/Button.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../providers/CartProvider.jsx";

const CheckoutWidget = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsComplete(true);

    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);
  };

  const subtotal = getTotal ? getTotal() : items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (isComplete) {
    return (
      <div className="checkout-widget">
        <div className="purchase-complete">
          <div className="purchase-complete-icon">✅</div>
          <h2>Purchase Complete!</h2>
          <p>Thank you for your order. You will be redirected shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-widget">
      <h2 className="checkout-widget-title">Checkout Summary</h2>

      {items.length > 0 ? (
        <>
          <div className="checkout-items">
            <h3 className="checkout-items-title">Items to purchase:</h3>
            {items.map((item, index) => (
              <div key={item.id || index} className="checkout-item">
                <div className="checkout-item-info">
                  <div className="checkout-item-name">{item.name}</div>
                  <div className="checkout-item-quantity">Quantity: {item.quantity}</div>
                </div>
                <div className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <div className="summary-row">
              <span className="summary-label">Subtotal:</span>
              <span className="summary-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Tax (10%):</span>
              <span className="summary-value">${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row summary-total">
              <span className="summary-label">Total:</span>
              <span className="summary-value">${total.toFixed(2)}</span>
            </div>
          </div>

          <Button variant="success" onClick={handleCheckout} disabled={isProcessing} fullWidth size="medium">
            {isProcessing ? "Processing..." : "Complete Purchase"}
          </Button>
        </>
      ) : (
        <div className="empty-checkout">
          <div className="empty-checkout-icon">🛒</div>
          <h3 className="empty-checkout-title">No items in cart</h3>
          <p className="empty-checkout-message">Add some items to your cart to proceed with checkout.</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutWidget;
