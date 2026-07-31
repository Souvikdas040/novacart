"use client";

import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaRegUserCircle, FaHeart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import "./navbar.css";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link href="/" className="logo">
          Nova<span>Cart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link target="_blank" href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Search */}
        <div className="search-box">
          <IoSearchOutline size={18} />
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Icons */}
        <div className="nav-icons">
          {/* Wishlist */}
          <Link href="/wishlist" className="icon-btn">
            <span className="wishlist-count">{wishlist.length}</span>
            <FaHeart size={22} color="tomato" />
          </Link>

          {/* Cart */}
          <Link href="/cart" className="icon-btn cart-btn">
            <RiShoppingCart2Fill size={22} />
            <span className="cart-count">{cart.length}</span>
          </Link>

          {/* User */}
          <button>
            <FaRegUserCircle size={22} />
          </button>
        </div>

        {/* Mobile Toggle */}

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoIosCloseCircleOutline size={30} />
          ) : (
            <CiMenuFries size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/products" onClick={() => setMenuOpen(false)}>
          Products
        </Link>

        <Link href="/about" target="_blank" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <Link href="/wishlist" onClick={() => setMenuOpen(false)}>
          Wishlist ({wishlist.length})
        </Link>

        <Link href="/cart" onClick={() => setMenuOpen(false)}>
          Cart ({cart.length})
        </Link>
      </div>
    </header>
  );
}
