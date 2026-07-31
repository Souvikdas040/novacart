import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
  FaUsers,
  FaBoxOpen,
  FaBuilding,
  FaSmile,
  FaArrowRight,
} from "react-icons/fa";

import "./about.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaCart - About Page",
  description: "Modern E-Commerce UI",
};

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="about-hero">
        {/* Background Video */}

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/about/about-fallback.jpg"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-badge">ABOUT NOVACART</span>

          <h1>
            Innovation.
            <br />
            Technology.
            <span> Trust.</span>
          </h1>

          <p>
            NovaCart brings the world's best technology products to your
            doorstep with trusted brands, competitive pricing and exceptional
            customer experience.
          </p>

          <div className="hero-buttons">
            <Link href="/products" className="primary-btn">
              Explore Products
            </Link>

            <Link href="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>

          <div className="hero-mini-stats">
            <div>
              <h3>10K+</h3>
              <span>Customers</span>
            </div>

            <div>
              <h3>500+</h3>
              <span>Products</span>
            </div>

            <div>
              <h3>99%</h3>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
      {/* story */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src="/images/about/hero.jpg"
              alt="NovaCart"
              width={650}
              height={500}
            />

            <div className="experience-card">
              <FaAward />
              <div>
                <h3>8+ Years</h3>
                <span>Trusted Experience</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">Our Story</span>

            <h2>Your Trusted Electronics Partner</h2>

            <p>
              NovaCart started with one vision—to make premium electronics
              affordable and accessible for everyone.
            </p>

            <p>
              Today we proudly offer smartphones, laptops, gaming accessories,
              wearables and smart devices from the world's leading brands.
            </p>

            <div className="story-list">
              <div>✓ Genuine Products</div>
              <div>✓ Fast Delivery</div>
              <div>✓ Secure Payments</div>
              <div>✓ Trusted Brands</div>
            </div>

            <Link href="/products" className="primary-btn">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="why-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Why Choose Us</span>

            <h2>Why Customers Love NovaCart</h2>

            <p>
              Everything you need for a secure, fast and enjoyable shopping
              experience.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <FaAward size={50} />
              <h3>Premium Quality</h3>
              <p>Only authentic products from trusted global brands.</p>
            </div>

            <div className="why-card">
              <FaShippingFast size={50} />
              <h3>Fast Shipping</h3>
              <p>Lightning-fast delivery with real-time tracking.</p>
            </div>

            <div className="why-card">
              <FaShieldAlt size={50} />
              <h3>Secure Payments</h3>
              <p>Encrypted checkout with multiple payment methods.</p>
            </div>

            <div className="why-card">
              <FaHeadset size={50} />
              <h3>24×7 Support</h3>
              <p>Friendly experts ready to help whenever you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="mission">
        <div className="container mission-grid">
          <div className="mission-content">
            <span className="section-tag">Our Mission</span>
            <h2>Making Technology Accessible</h2>
            <p>
              We believe everyone deserves access to cutting-edge technology at
              transparent prices backed by exceptional customer service.
            </p>

            <ul>
              <li>
                <span className="check-icon">✓</span>
                Premium Products
              </li>

              <li>
                <span className="check-icon">✓</span>
                Fast & Secure Delivery
              </li>

              <li>
                <span className="check-icon">✓</span>
                Secure Payments
              </li>

              <li>
                <span className="check-icon">✓</span>
                24×7 Customer Support
              </li>
            </ul>
          </div>

          <div className="mission-image">
            <Image
              src="/images/about/mission.jpg"
              alt="Mission"
              width={600}
              height={450}
            />
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <FaUsers size={80} />
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <FaBoxOpen size={80} />
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div className="stat-card">
            <FaBuilding size={80} />
            <h2>50+</h2>
            <p>Trusted Brands</p>
          </div>

          <div className="stat-card">
            <FaSmile size={80} />
            <h2>99%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* trusted brands */}
      <section className="brands-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Trusted Partners</span>

            <h2>Brands We Work With</h2>

            <p>
              We partner with the world's leading technology companies to
              deliver authentic products backed by official warranty and
              reliable support.
            </p>
          </div>

          <div className="brands-grid">
            <div className="brand-card">
              <Image
                src="/images/brands/apple.png"
                alt="Apple"
                width={120}
                height={50}
              />
            </div>

            <div className="brand-card">
              <Image
                src="/images/brands/samsung.png"
                alt="Samsung"
                width={120}
                height={50}
              />
            </div>

            <div className="brand-card">
              <Image
                src="/images/brands/sony.png"
                alt="Sony"
                width={120}
                height={50}
              />
            </div>

            <div className="brand-card">
              <Image
                src="/images/brands/dell.png"
                alt="Dell"
                width={120}
                height={50}
              />
            </div>

            <div className="brand-card">
              <Image
                src="/images/brands/asus.png"
                alt="ASUS"
                width={120}
                height={50}
              />
            </div>

            <div className="brand-card">
              <Image
                src="/images/brands/logitech.png"
                alt="Logitech"
                width={120}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="about-section">
        <div className="container about-grid reverse">
          <div className="about-content">
            <span className="section-tag">Our Team</span>

            <h2>People Behind NovaCart</h2>

            <p>
              Our passionate professionals work every day to deliver an amazing
              shopping experience—from discovering products to receiving them at
              your doorstep.
            </p>

            <Link href="/contact" className="secondary-btn">
              Meet Our Experts
            </Link>
          </div>

          <div className="about-image">
            <Image
              src="/images/about/team.jpg"
              alt="Team"
              width={650}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Upgrade Your Tech?</h2>

          <p>
            Browse hundreds of premium electronics from trusted brands and enjoy
            fast delivery.
          </p>

          <Link href="/products" className="cta-btn">
            Shop Now
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
