import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company */}

          <div className="footer-column">
            <h2 className="footer-logo">
              Nova<span>Cart</span>
            </h2>

            <p>
              NovaCart is your trusted online destination for premium
              electronics, smart gadgets, gaming accessories, and cutting-edge
              technology.
            </p>

            <div className="social-icons">
              <a href="#">
                <FaFacebook size={20} />
              </a>

              <a href="#">
                <FaInstagram size={20} />
              </a>

              <a href="#">
                <FaTwitter size={20} />
              </a>

              <a href="#">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link href="/">Home</Link>

            <Link href="/products">Products</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>
          </div>

          {/* Categories */}

          <div className="footer-column">
            <h3>Categories</h3>

            <a href="#">Smartphones</a>

            <a href="#">Laptops</a>

            <a href="#">Gaming</a>

            <a href="#">Accessories</a>

            <a href="#">Smart Watches</a>
          </div>

          {/* Contact */}

          <div className="footer-column">
            <h3>Contact</h3>

            <div className="contact-item">
              <FaMapMarkerAlt size={18} />

              <span>New York, USA</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt size={18} />

              <span>+1 987 654 3210</span>
            </div>

            <div className="contact-item">
              <SiGmail size={18} />

              <span>support@novacart.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NovaCart. All Rights Reserved.</p>

          <div className="payment-icons">
            <span>Visa</span>

            <span>MasterCard</span>

            <span>PayPal</span>

            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
