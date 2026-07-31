"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductFilter from "@/components/ProductFilter/ProductFilter";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Pagination from "@/components/Pagination/Pagination";

import { products } from "@/data/products";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All",
  );
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 6;

  // Sync category with URL
  useEffect(() => {
    setCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Sorting
    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    return filtered;
  }, [search, category, sort]);

  // Reset pagination whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  return (
    <>
      <ProductFilter
        totalProducts={filteredProducts.length}
        search={search}
        category={category}
        sort={sort}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      <FeaturedProducts products={displayedProducts} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
