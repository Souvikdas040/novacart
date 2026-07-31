"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import "./productCard.css";
interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart();

  const { toggleWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="product-card">
      <div className="product-image">
        <Link href={`/product/${product.id}`}>
          <span className="badge">New</span>

          <Image
            src={product.images[0]}
            alt={product.name}
            width={350}
            height={350}
            className="product-img"
            priority={product.id === 1}
          />
        </Link>

        <button
          className={`wishlist-btn ${wishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Wishlist"
        >
          {wishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐ {product.rating}
          <span>({product.reviews ?? 245} Reviews)</span>
        </div>

        <div className="price">${product.price}</div>

        <div className="buttons">
          <Link
            href={`/product/${product.id}`}
            className="details-btn"
          >
            Details
          </Link>

          <button
            className="cart-btn2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}