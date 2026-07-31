import "./newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-container">
        <div className="newsletter-content">
          <span className="newsletter-tag">Stay Updated</span>

          <h2>Subscribe to Our Newsletter</h2>

          <p>
            Be the first to know about exclusive offers, new arrivals, product
            launches, and seasonal discounts.
          </p>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
