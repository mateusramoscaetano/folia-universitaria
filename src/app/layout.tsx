import type { Metadata } from "next";

import { codecCold, codecWarm } from "../lib/fonts";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Curitiba Folia",
  description: "Promoção by Formô",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${codecCold.variable} ${codecWarm.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
