import type { Metadata } from "next";
import { Cairo, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-english",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-english-sans",
});

export const metadata: Metadata = {
  title: "Luxury Wedding Invitation",
  description: "An ultra-premium digital wedding invitation.",
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cairo.variable} ${playfair.variable} ${poppins.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
