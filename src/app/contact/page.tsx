import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

import "./contact.css";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="contact-hero">
        <div className="container hero-content">
          <span className="hero-badge">Need Assistance?</span>

          <h1>Contact NovaCart</h1>

          <p>
            Have questions about your order, products, returns or warranty? Our
            support team is ready to help you anytime.
          </p>
        </div>
      </section>

      {/* Contact */}

      <section className="contact-section">
        <div className="container contact-grid">
          {/* Left */}

          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p className="contact-text">
              Reach out to our dedicated support team. We usually reply within
              24 hours.
            </p>

            <div className="contact-card">
              <div className="icon-box">
                <FaLocationDot />
              </div>

              <div>
                <h3>Visit Us</h3>
                <p>25 Madison Avenue, New York, NY</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box">
                <FaPhone />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+1 (987) 654-3210</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>support@novacart.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box">
                <FaClock />
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="contact-form-card">
            <h2>Send us a Message</h2>

            <p>Fill out the form below and we'll get back to you shortly.</p>

            <form className="contact-form">
              <input type="text" placeholder="Full Name" />

              <input type="email" placeholder="Email Address" />

              <input type="text" placeholder="Phone Number" />

              <input type="text" placeholder="Subject" />

              <textarea rows={6} placeholder="Your Message" />

              <button type="submit">Send Message →</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}

      <section className="map-wrapper">
        <div className="container">
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps?q=New+York&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}

      <FAQAccordion />

      <Footer />
    </>
  );
}
