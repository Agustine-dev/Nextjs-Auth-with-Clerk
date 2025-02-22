import type { Metadata } from "next";
import Header from "../components/Header";
import {
  ClerkProvider
} from '@clerk/nextjs'
import "./globals.css";
import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "An ecommerce site for the latest fashion trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
   </ClerkProvider>
  );
}
