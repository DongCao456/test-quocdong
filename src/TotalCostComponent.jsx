import React from "react";

export default function TotalCostComponent({ total }) {
  return (
    <div className="summary">
      <div className="summary-total-items">
        <span className="total-items"></span> Items in your Bag
      </div>

      <div className="summary-total">
        <div className="total-title">Total</div>
        <div className="total-value final-value" id="basket-total">
          {Number(total)}
        </div>
      </div>
      <div className="summary-checkout">
        <button className="checkout-cta">Go to Secure Checkout</button>
      </div>
    </div>
  );
}
