"use client";

import { useState } from "react";
import "./quantitySelector.css";

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({
  initialValue = 1,
  min = 1,
  max = 10,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const increase = () => {
    if (quantity < max) {
      const value = quantity + 1;
      setQuantity(value);
      onChange?.(value);
    }
  };

  const decrease = () => {
    if (quantity > min) {
      const value = quantity - 1;
      setQuantity(value);
      onChange?.(value);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={decrease}>−</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}
