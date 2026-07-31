"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import { testimonials } from "@/data/testimonials";

import "./testimonials.css";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-top">
          <div className="testimonial-heading">
            <h2 className="section-title">What Our Customers Say</h2>

            <p className="section-subtitle">
              Thousands of happy customers trust NovaCart for premium
              electronics and exceptional service.
            </p>
          </div>

          <div className="slider-buttons">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((item) => (
              <div className="embla__slide" key={item.id}>
                <article className="testimonial-card">
                  <FaQuoteLeft className="quote" />

                  <div className="testimonial-header">
                    <div className="avatar">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="72px"
                      />
                    </div>

                    <div className="user-info">
                      <h3>{item.name}</h3>
                      <span>{item.role}</span>
                    </div>
                  </div>

                  <div className="stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p>{item.review}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
