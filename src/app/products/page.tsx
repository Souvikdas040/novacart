import { Suspense } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductsPageContent from "@/components/ProductsPageContext/ProductsPageContext";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>
            Discover premium electronics,
            accessories and smart devices.
          </p>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductsPageContent />
      </Suspense>

      <Footer />
    </>
  );
}