"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Product } from "@/data/products";

import "./productSpecifications.css";

interface ProductSpecificationsProps {
  product: Product;
}

export default function ProductSpecifications({
  product,
}: ProductSpecificationsProps) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="product-tabs">
      {/* Tabs */}

      <div className="tabs-header">
        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "specifications" ? "active" : ""}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </button>

        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({product.reviews})
        </button>
      </div>

      {/* ================= Description ================= */}

      <div className="tab-content">
        {activeTab === "description" && (
          <div className="fade">
            <h2>Product Description</h2>

            <p>{product.description}</p>
          </div>
        )}

        {/* ================= Specifications ================= */}

        {activeTab === "specifications" && (
          <div className="fade">
            <h2>Technical Specifications</h2>

            <div className="spec-table">
              {product.specifications.map((spec, index) => (
                <div className="spec-item" key={index}>
                  <span className="spec-label">{spec.label}</span>

                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= Reviews ================= */}

        {activeTab === "reviews" && (
          <div className="review-list">
            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar">
                  <img
                    src="https://i.pravatar.cc/60?img=12"
                    alt="John Anderson"
                  />
                </div>

                <div>
                  <h4>John Anderson</h4>

                  <div className="review-stars">
                    {[...Array(Math.round(product.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p>
                Excellent product with premium build quality, smooth performance
                and great battery life. Highly recommended.
              </p>
            </div>

            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar">
                  <img
                    src="https://i.pravatar.cc/60?img=24"
                    alt="Emily Watson"
                  />
                </div>

                <div>
                  <h4>Emily Watson</h4>

                  <div className="review-stars">
                    {[...Array(Math.round(product.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p>
                Worth every penny. Excellent display, performance and overall
                user experience.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
