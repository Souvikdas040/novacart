"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import "./cartSummary.css";

export default function CartSummary() {
  const { cart } = useCart();
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
  const shipping = subtotal >= 500 ? 0 : 20;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <strong>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</strong>
      </div>

      <div className="summary-row">
        <span>Tax (5%)</span>
        <strong>${tax.toFixed(2)}</strong>
      </div>

      <hr />

      <div className="summary-row total">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </div>

      <div className="coupon-box">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply</button>
      </div>

      <Link href="/checkout" className="checkout-btn">
        Proceed to Checkout
      </Link>

      <Link href="/products" className="continue-btn">
        Continue Shopping
      </Link>
    </aside>
  );
}
