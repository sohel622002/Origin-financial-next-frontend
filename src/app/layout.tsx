import type { Metadata } from "next";
import "./globals.css";

import touche from "./fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Origin Fincancial",
  description: "Origin Fincancial Next js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={`${touche.className} relative`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
