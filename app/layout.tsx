import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { CartProvider } from "./context/CartContext";
import { SavedProvider } from "./context/SavedContext";
import { ProductProvider } from "./context/ProductContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decora",
  description: "Interior design inspiration platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Providers */}
        <ProductProvider>
          <SavedProvider>
           <CartProvider>
              <Nav />
              {children}
            </CartProvider>
          </SavedProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
