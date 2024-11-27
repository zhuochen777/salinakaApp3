import React from "react";
import "../css/StepTracker.css";

export default function StepTracker({ current }) {
  const className = (step) =>
    current === step ? "is-active-step" : step < current ? "is-done-step" : "";

  return (
    <div className="checkout">
      <div className="checkout-header">
        <ul className="checkout-header-menu">
          <li className={`checkout-header-list ${className(1)}`}>
            <div className="checkout-header-item">
              <div className="checkout-header-icon">
                <h4 className="checkout-header-step">1</h4>
              </div>
              <span className="checkout-header-subtitle">Order Summary</span>
            </div>
          </li>
          <li className={`checkout-header-list ${className(2)}`}>
            <div className="checkout-header-item">
              <div className="checkout-header-icon">
                <h4 className="checkout-header-step">2</h4>
              </div>
              <span className="checkout-header-subtitle">Shipping Details</span>
            </div>
          </li>
          <li className={`checkout-header-list ${className(3)}`}>
            <div className="checkout-header-item">
              <div className="checkout-header-icon">
                <h4 className="checkout-header-step">3</h4>
              </div>
              <span className="checkout-header-subtitle">Payment</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
