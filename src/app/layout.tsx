import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import MobileSidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rangrez Foundation",
  description: "Rangrej Foundation",
};

const liItems = [
  {
      label: "Home",
      path: "/"
  },
  {
      label: "About",
      path: "/about"
  },
  {
      label: "Gallery",
      path: "/gallery"
  },
  {
      label: "Contact Us",
      path: "/contact"
  }
]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="hidden md:block">
        <Header liItems={liItems} src="./images/logo.png" alt="logo" number="999999999" />
      </div>
      <div className="block md:hidden">
        <MobileSidebar />
      </div>
        {children}
        <Footer number="9999999999" liItems={liItems}/>
      </body>
    </html>
  );
}
