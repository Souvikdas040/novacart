"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import "./checkout.css";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <section className="checkout-page">
        <div className="container">
          <div className="checkout-header">
            <h1>Checkout</h1>
            <p>Complete your order securely.</p>
          </div>

          <div className="checkout-layout">
            <CheckoutForm />
            <OrderSummary />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
