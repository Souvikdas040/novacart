"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import "./relatedProducts.css";

interface RelatedProductsProps {
  currentId: number;
}

export default function RelatedProducts({ currentId }: RelatedProductsProps) {
  const { addToCart } = useCart();

  const { toggleWishlist, isWishlisted } = useWishlist();

  const relatedProducts = products
    .filter((product) => (currentId ? product.id !== currentId : true))
    .slice(0, 4);

  return (
    <section className="related-section">
      <div className="related-heading">
        <h2>You May Also Like</h2>

        <p>Explore similar products selected especially for you.</p>
      </div>

      <div className="related-grid">
        {relatedProducts.map((product: Product) => (
          <div className="related-card" key={product.id}>
            <span className="badge">{product.discount || "New"}</span>

            <button
              className={`wishlist-btn ${
                isWishlisted(product.id) ? "active" : ""
              }`}
              onClick={() => toggleWishlist(product.id)}
              aria-label="Wishlist"
            >
              <FaHeart />
            </button>

            <Link href={`/product/${product.id}`}>
              <div className="image-box">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={260}
                  height={260}
                  className="product-image"
                />
              </div>
            </Link>

            <div className="card-content">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <div className="rating">
                <FaStar />
                <span>{product.rating}</span>
                <small>({product.reviews} Reviews)</small>
              </div>

              <div className="price-row">
                <span className="price">${product.price}</span>

                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice}</span>
                )}
              </div>

              <div className="buttons">
                <Link href={`/product/${product.id}`} className="view-btn">
                  Details
                </Link>

                <button
                  className="cart-btn3"
                  onClick={() => addToCart(product)}
                >
                  <RiShoppingCart2Line />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
