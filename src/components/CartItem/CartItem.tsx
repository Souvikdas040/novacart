"use client";

import Image from "next/image";
import { FaTrash, FaMinus, FaPlus, FaStar } from "react-icons/fa";

import { useCart } from "@/context/CartContext";

import "./cartItem.css";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    category: string;
    images: string[];
    price: number;
    rating: number;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-image">
        <Image src={item.images[0]} alt={item.name} width={180} height={180} />
      </div>

      <div className="cart-details">
        <span className="category">{item.category}</span>

        <h2>{item.name}</h2>

        <div className="rating">
          <FaStar />
          <span>{item.rating}</span>
        </div>

        <h3>${item.price}</h3>

        <div className="quantity">
          <button onClick={() => decreaseQuantity(item.id)}>
            <FaMinus />
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id)}>
            <FaPlus />
          </button>
        </div>

        <div className="subtotal">
          Subtotal:
          <strong>${item.price * item.quantity}</strong>
        </div>

        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
          <FaTrash />
          Remove
        </button>
      </div>
    </div>
  );
}
