"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import "./breadcrumb.css";

interface BreadcrumbProps {
  category: string;
  productName?: string;
}

export default function Breadcrumb({ category, productName }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <Link href="/">Home</Link>
      <FaChevronRight className="separator" />
      <Link href="/products">Products</Link>
      <FaChevronRight className="separator" />
      <span>{category}</span>
      {productName && (
        <>
          <FaChevronRight className="separator" />
          <span className="active">{productName}</span>
        </>
      )}
    </nav>
  );
}
