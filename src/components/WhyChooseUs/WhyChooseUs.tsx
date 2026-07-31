import { CiDeliveryTruck } from "react-icons/ci";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FiRotateCcw } from "react-icons/fi";
import { FaHeadphonesAlt } from "react-icons/fa";

import "./whyChooseUs.css";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CiDeliveryTruck size={40} />,
      title: "Free Shipping",
      description:
        "Enjoy free shipping on all orders over $99 with fast and reliable delivery.",
    },
    {
      icon: <IoShieldCheckmarkSharp size={40} />,
      title: "Secure Payments",
      description:
        "Your transactions are protected with industry-standard encrypted payment gateways.",
    },
    {
      icon: <FiRotateCcw size={40} />,
      title: "Easy Returns",
      description:
        "Hassle-free returns within 30 days if you're not completely satisfied.",
    },
    {
      icon: <FaHeadphonesAlt size={40} />,
      title: "24/7 Support",
      description:
        "Our customer support team is available around the clock to help you.",
    },
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose NovaCart?</h2>

        <p className="section-subtitle">
          We are committed to delivering the best shopping experience with
          quality products, secure payments, and exceptional customer support.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
