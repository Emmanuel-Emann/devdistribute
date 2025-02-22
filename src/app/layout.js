// "use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buylocalafrica",
  description: "One-stop shop for bulk food items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
