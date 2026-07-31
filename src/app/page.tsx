import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Categories from "@/components/Categories/Categories";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import FlashSale from "@/components/FlashSale/FlashSale";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts products={products} />
      <WhyChooseUs />
      <FlashSale />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
