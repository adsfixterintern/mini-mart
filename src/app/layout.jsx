import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from 'react-hot-toast';
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />
        <ReactQueryProvider>
          <CartProvider>
        {children}
          </CartProvider>
        </ReactQueryProvider>

      </body>
    </html>
  );
}
