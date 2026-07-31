"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}
const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const addToWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };
  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item !== id));
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isWishlisted = (id: number) => wishlist.includes(id);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be inside WishlistProvider");
  return context;
}
