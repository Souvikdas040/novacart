"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";
import "./orderSummary.css";

export default function OrderSummary() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);
  const shipping = subtotal >= 500 ? 0 : 20;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    clearCart();
    toast.success("Order placed successfully!");
    router.push("/order-success");
  };

  return (
    <aside className="order-summary">
      <h2>Your Order</h2>

      {cart.map((item) => (
        <div key={item.id} className="summary-product">
          <span>
            {item.name} × {item.quantity}
          </span>

          <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
      ))}

      <hr />

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

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </aside>
  );
}
