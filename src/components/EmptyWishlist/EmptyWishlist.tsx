import Link from "next/link";
import { FaHeartBroken } from "react-icons/fa";

import "./emptyWishlist.css";

export default function EmptyWishlist() {
  return (
    <div className="empty-wishlist">
      <FaHeartBroken className="empty-icon" />

      <h2>Your Wishlist is Empty</h2>

      <p>Save products you love and purchase them later.</p>

      <Link href="/products" className="shop-btn">
        Browse Products
      </Link>
    </div>
  );
}
