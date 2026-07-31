"use client";

import "./checkoutForm.css";

export default function CheckoutForm() {
  return (
    <div className="checkout-form">
      <h2>Billing Details</h2>

      <form>
        <div className="grid-2">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Street Address" required />

        <div className="grid-3">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="ZIP Code" />
        </div>
      </form>
    </div>
  );
}
