import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { categories } from "@/data/categories";
import "./categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Shop By Category</h2>

          <p className="section-subtitle">
            Browse our carefully selected categories to find your perfect tech
            companion.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                />
              </div>

              <div className="category-content">
                <h3>{category.name}</h3>

                <Link
                  href={`/products?category=${encodeURIComponent(category.name)}`}
                  className="explore-btn"
                >
                  Explore
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
