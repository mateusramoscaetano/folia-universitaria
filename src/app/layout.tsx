import type { Metadata } from "next";

import { codecCold, codecWarm } from "../lib/fonts";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Card from "@/components/card";
import ConditionalImage from "@/components/conditional-image";

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
        <div className="min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/bg.png')] relative overflow-hidden">
          <Image
            src="/elemento-2-1.png"
            alt="logo"
            width={215}
            height={142}
            className="absolute bottom-1/3 xmd:hidden left-0 object-cover w-full h-auto"
          />

          <Image
            src="/elemento-2-1-web.png"
            alt="logo"
            width={215}
            height={142}
            className="absolute bottom-1/3 xmd:block hidden left-0 object-cover w-full h-auto"
          />
          <div className="flex flex-col  min-h-screen relative pt-10 items-center px-5">
            <h1 className="md:text-base font-codec-warm text-[10px] tracking-[6px] text-white font-bold">
              FORMÔ APRESENTA
            </h1>
            <Image
              src="/logo-folia-web.svg"
              alt="logo"
              width={215}
              height={142}
              className="mt-10 md:w-[433px] md:h-auto"
            />

            <ConditionalImage />

            <Card>{children}</Card>
          </div>
          <div className="w-full  flex items-center justify-center ">
            <Image
              src="/atracoes.svg"
              alt="atracoes"
              width={1000}
              height={607}
              className="-mt-8 md:-mt-15 scale-150 relative z-30 object-cover -ml-6 xmd:-ml-10"
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              src="/logo-curitiba-folia.svg"
              alt="logo-folia"
              width={179}
              height={123}
              className="-mt-5 overflow-hidden relative z-30 md:scale-150 "
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              src="/logo-formo.svg"
              alt="logo-formo"
              width={122}
              height={122}
              className="mt-10 overflow-hidden relative z-30 mb-20 md:w-[250px]"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
