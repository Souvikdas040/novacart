import Image from "next/image";
import "./flashSale.css";

export default function FlashSale() {
  return (
    <section className="flash-sale">
      <div className="container flash-container">
        {/* Left */}
        <div className="flash-content">
          <span className="sale-tag">🔥 Limited Time Offer</span>
          <h2>Mega Flash Sale</h2>

          <h1>
            Up to <span>50% OFF</span>
          </h1>

          <p>
            Upgrade your setup with premium electronics, laptops, smartphones,
            accessories and gaming products at unbeatable prices.
          </p>

          <button>Shop Now →</button>
        </div>

        {/* Right */}
        <div className="flash-image">
          <Image
            src="/images/hero/flash_sale.jpg"
            alt="Flash Sale"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
