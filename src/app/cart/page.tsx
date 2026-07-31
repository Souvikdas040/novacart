"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { useCart } from "@/context/CartContext";

import CartItem from "@/components/CartItem/CartItem";
import CartSummary from "@/components/CartSummary/CartSummary";
import EmptyCart from "@/components/EmptyCart/EmptyCart";

import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";

import "./cart.css";
import { products } from "@/data/products";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="container">
          <div className="cart-header">
            <h1>Shopping Cart</h1>

            <p>
              {cart.length} {cart.length === 1 ? "Item" : "Items"} in your cart
            </p>
          </div>

          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <CartSummary />
            </div>
          )}
        </div>
      </section>

      <RelatedProducts currentId={0} />

      <Footer />
    </>
  );
}
