import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Eco Fuel",
  description: "Develope in Next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
