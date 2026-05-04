import Button from "../components/Button.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../providers/CartProvider.jsx";

const CartSummary = () => {
  const { items, getTotal } = useCart();
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="summary-card">
      <div className="cart-summary">
        <div className="summary-row">
          <span>Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row summary-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <Button variant="success" onClick={() => navigate("/checkout")} disabled={items.length === 0} fullWidth>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
