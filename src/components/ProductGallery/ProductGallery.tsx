"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./productGallery.css";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  // Prevent rendering if no images exist
  if (!images || images.length === 0) {
    return (
      <div className="gallery">
        <div className="main-image-card">
          <p>No images available.</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      {/* Main Image */}
      <div className="main-image-card">
        <button
          className="arrow left"
          onClick={prevImage}
          aria-label="Previous Image"
        >
          <FaChevronLeft />
        </button>

        <div className="image-container">
          <Image
            src={images[selected]}
            alt={name}
            fill
            priority
            className="main-image"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>

        <button
          className="arrow right"
          onClick={nextImage}
          aria-label="Next Image"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-row">
        {images.map((img, index) => (
          <button
            key={index}
            className={`thumb ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={img}
              alt={`${name} ${index + 1}`}
              fill
              className="thumb-image"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}