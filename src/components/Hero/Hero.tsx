"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlides } from "@/data/heroSlides";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        loop
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="hero-bg"
              />

              <div className="hero-overlay" />

              <div className="container hero-content">
                <span className="hero-tag">{slide.tag}</span>
                <h1>
                  {slide.title}
                  <span> {slide.highlight}</span>
                </h1>
                <p>{slide.subtitle}</p>

                <div className="hero-buttons">
                  <Link href="/products" className="primary-btn">
                    Shop Now
                  </Link>

                  <Link href="/products" className="secondary-btn">
                    Explore Products
                  </Link>
                </div>

                <div className="hero-stats">
                  <div>
                    <h2>20K+</h2>
                    <span>Happy Customers</span>
                  </div>

                  <div>
                    <h2>1500+</h2>
                    <span>Products</span>
                  </div>

                  <div>
                    <h2>99%</h2>
                    <span>Positive Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
