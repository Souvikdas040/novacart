import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "NovaCart",
  description: "Modern E-Commerce UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <WishlistProvider>
          <CartProvider>
            {children}

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2500,

                style: {
                  borderRadius: "10px",
                  background: "#111827",
                  color: "#fff",
                },
              }}
            />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
