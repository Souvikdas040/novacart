"use client";

import { useState } from "react";
import {
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaHeart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import "./productInfo.css";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "");
  const [selectedStorage, setSelectedStorage] = useState(
    product.storage[0] ?? "",
  );
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="product-info">
      {/* Rating */}

      <div className="rating-row">
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <span className="reviews">
          {product.rating} ({product.reviews} Reviews)
        </span>
      </div>

      {/* Product Name */}
      <h1 className="product-title">{product.name}</h1>

      {/* Category */}
      <span className="category-badge">{product.category}</span>

      {/* Price */}
      <div className="price-row">
        <h2 className="price">${product.price}</h2>

        {product.oldPrice && (
          <span className="old-price">${product.oldPrice}</span>
        )}

        {product.discount && (
          <span className="discount">{product.discount}</span>
        )}
      </div>

      {/* Stock */}
      <div className={`stock ${product.inStock ? "in-stock" : "out-stock"}`}>
        {product.inStock ? "✔ In Stock" : "✖ Out of Stock"}
      </div>

      {/* Description */}
      <p className="description">{product.description}</p>

      {/* Colors */}
      {product.colors.length > 0 && (
        <div className="option-group">
          <h4>Color</h4>

          <div className="colors">
            {product.colors.map((color) => (
              <button
                key={color}
                className={selectedColor === color ? "active" : ""}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Storage */}
      {product.storage.length > 0 && (
        <div className="option-group">
          <h4>Storage</h4>

          <div className="storage">
            {product.storage.map((storage) => (
              <button
                key={storage}
                className={selectedStorage === storage ? "active" : ""}
                onClick={() => setSelectedStorage(storage)}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="quantity-row">
        <h4>Quantity</h4>
        <div className="quantity-box">
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <button className="cart-button" onClick={() => addToCart(product)}>
          <RiShoppingCart2Fill />
          Add to Cart
        </button>
        <button className="buy-button">Buy Now</button>
        <button
          className={`wishlist-button ${
            isWishlisted(product.id) ? "active" : ""
          }`}
          onClick={() => toggleWishlist(product.id)}
        >
          <FaHeart />
        </button>
      </div>

      {/* Service Cards */}
      <div className="service-list">
        <div className="service-card">
          <FaTruck />

          <div>
            <h5>Free Delivery</h5>
            <p>Within 3-5 Business Days</p>
          </div>
        </div>

        <div className="service-card">
          <FaShieldAlt />

          <div>
            <h5>Official Warranty</h5>
            <p>1 Year Manufacturer Warranty</p>
          </div>
        </div>

        <div className="service-card">
          <FaUndoAlt />

          <div>
            <h5>Easy Returns</h5>
            <p>30-Day Return Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
