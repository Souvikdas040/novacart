"use client";

import "./productToolbar.css";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  selectedCategory: string;
  setSelectedCategory: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;

  categories: string[];

  total: number;
}

export default function ProductToolbar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  sort,
  setSort,
  categories,
  total,
}: Props) {
  return (
    <section className="product-toolbar">
      <div className="toolbar-top">
        <h2>Our Products</h2>
        <p>
          Showing <strong>{total}</strong> Products
        </p>
      </div>

      <div className="toolbar-search-sort">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
