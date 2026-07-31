"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import "./faqAccordion.css";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are usually delivered within 3–7 business days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes. We provide a hassle-free 30-day return policy on eligible products.",
  },
  {
    question: "Do products include warranty?",
    answer:
      "All branded electronics come with the official manufacturer warranty.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal and major UPI payment methods.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Once your order ships you'll receive a tracking link via email.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. NovaCart uses encrypted SSL payment gateways for secure transactions.",
  },
];

export default function FAQAccordion() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <p className="section-subtitle">
          Everything you need to know before placing your order.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${active === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => setActive(active === index ? null : index)}
              >
                <span>{faq.question}</span>

                {active === index ? <FaMinus /> : <FaPlus />}
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
