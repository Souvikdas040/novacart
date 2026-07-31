"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import "./emptyCart.css";

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-icon">
        <FaShoppingCart />
      </div>

      <h2>Your Cart is Empty</h2>

      <p>Looks like you haven't added any products to your cart yet.</p>

      <Link href="/products" className="shop-btn">
        Continue Shopping
      </Link>
    </div>
  );
}
