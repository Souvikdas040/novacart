"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { FaCheckCircle } from "react-icons/fa";

import "./orderSuccess.css";

export default function OrderSuccessPage() {
  const orderId = `NV-${Date.now().toString().slice(-6)}`;

  return (
    <>
      <Navbar />

      <section className="order-success-page">
        <div className="container">
          <div className="success-card">
            <FaCheckCircle className="success-icon" />

            <h1>Order Placed Successfully!</h1>

            <p>
              Thank you for shopping with <strong>NovaCart</strong>.
            </p>

            <div className="order-details">
              <p>
                <strong>Order ID:</strong> {orderId}
              </p>

              <p>
                <strong>Estimated Delivery:</strong> 3–5 Business Days
              </p>
            </div>

            <Link href="/products" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
