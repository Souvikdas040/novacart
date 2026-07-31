import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/data/products";

import "./featuredProducts.css";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function FeaturedProducts({
  products,
  title = "Featured Products",
  subtitle = "Explore our latest collection of premium gadgets and accessories.",
}: FeaturedProductsProps) {
  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <p className="section-subtitle">{subtitle}</p>

        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>No products found</h2>
            <p>Try changing your search or filter options.</p>
          </div>
        )}
      </div>
    </section>
  );
}
