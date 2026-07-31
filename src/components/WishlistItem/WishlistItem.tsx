"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaTrash } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Product } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import "./wishlistItem.css";

interface WishlistItemProps {
  product: Product;
}

export default function WishlistItem({ product }: WishlistItemProps) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const handleMoveToCart = () => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="wishlist-item">
      <Link href={`/product/${product.id}`} className="wishlist-image">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={170}
          height={170}
        />
      </Link>

      <div className="wishlist-content">
        <span className="wishlist-category">{product.category}</span>
        <h2>{product.name}</h2>

        <div className="wishlist-rating">
          <FaStar />
          <span>{product.rating}</span>
          <small>({product.reviews} Reviews)</small>
        </div>

        <div className="wishlist-price">${product.price}</div>

        <div className="wishlist-buttons">
          <Link href={`/product/${product.id}`} className="details-btn">
            Details
          </Link>

          <button className="cart-btn1" onClick={handleMoveToCart}>
            <RiShoppingCart2Fill />
            Move to Cart
          </button>

          <button
            className="remove-btn"
            onClick={() => removeFromWishlist(product.id)}
          >
            <FaTrash />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
