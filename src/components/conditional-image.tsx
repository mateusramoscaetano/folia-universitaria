"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export default function ConditionalImage() {
  const pathname = usePathname();
  const isCadastroPage = pathname === "/cadastro";

  return (
    <Image
      src="/elemento-web.png"
      alt="logo"
      width={500}
      height={500}
      className={cn(
        "absolute left-0",
        isCadastroPage ? "top-20" : "top-60 xmd:top-80"
      )}
    />
  );
}
