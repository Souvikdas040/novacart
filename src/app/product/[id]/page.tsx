import Link from "next/link";
import { products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import ProductSpecifications from "@/components/ProductSpecifications/ProductSpecifications";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import "./productDetails.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="product-page">
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb category={product.category} productName={product.name} />

          {/* Product Section */}
          <div className="product-wrapper">
            <ProductGallery images={product.images} name={product.name} />
            <ProductInfo product={product} />
          </div>

          {/* Specifications */}
          <ProductSpecifications product={product} />

          {/* Related Products */}
          <RelatedProducts currentId={product.id} />
        </div>
      </main>
      <Footer />
    </>
  );
}
