"use client";

import { categories } from "@/data/categories";
import "./productFilter.css";

interface ProductFilterProps {
  totalProducts: number;
  search: string;
  category: string;
  sort: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function ProductFilter({
  totalProducts,
  search,
  category,
  sort,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: ProductFilterProps) {
  return (
    <section className="product-filter">
      <div className="container filter-container">
        <div className="results">
          Showing <strong>{totalProducts}</strong>{" "}
          {totalProducts === 1 ? "Product" : "Products"}
        </div>

        <div className="filter-group">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>
    </section>
  );
}
