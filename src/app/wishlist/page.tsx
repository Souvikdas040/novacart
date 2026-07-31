"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import WishlistItem from "@/components/WishlistItem/WishlistItem";
import EmptyWishlist from "@/components/EmptyWishlist/EmptyWishlist";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import "./wishlist.css";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  // Convert IDs to Product objects
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id),
  );

  return (
    <>
      <Navbar />

      <section className="wishlist-page">
        <div className="container">
          <div className="wishlist-header">
            <h1>My Wishlist</h1>

            <p>
              {wishlistProducts.length}{" "}
              {wishlistProducts.length === 1 ? "Item" : "Items"}
            </p>
          </div>

          {wishlistProducts.length === 0 ? (
            <EmptyWishlist />
          ) : (
            <div className="wishlist-list">
              {wishlistProducts.map((product) => (
                <WishlistItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <RelatedProducts currentId={0} />

      <Footer />
    </>
  );
}
