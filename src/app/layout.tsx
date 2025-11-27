import type { Metadata } from "next";

import { codecCold, codecWarm } from "../lib/fonts";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Card from "@/components/card";
import ConditionalImage from "@/components/conditional-image";

export const metadata: Metadata = {
  title: "Sorteio ingresso Gusttavo Lima Embaixador Classic",
  description: "Promo by Formô",
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
        <div className="min-h-screen bg-cover bg-no-repeat bg-center golden-glow relative overflow-hidden">
          <div className="flex flex-col   relative pt-10 items-center px-5">
            <h1 className="md:text-base font-codec-warm text-[10px] tracking-[6px] text-white font-bold">
              FORMÔ APRESENTA
            </h1>
            <Image
              src="/embaixador.png"
              alt="embaixador"
              width={215}
              height={142}
              className="mt-10 md:w-[433px] md:h-auto mb-10"
            />

            <Card>{children}</Card>
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              src="/logo-formo.svg"
              alt="logo-formo"
              width={122}
              height={122}
              className=" overflow-hidden relative z-30  "
            />
          </div>
        </div>
      </body>
    </html>
  );
}
