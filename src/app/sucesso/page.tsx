import { CardHeader } from "@/components/card";
import Image from "next/image";

export default function Sucesso() {
  return (
    <>
      <CardHeader />
      <svg
        width="73"
        height="73"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4 md:mb-10 mt-4 md:mt-10 md:scale-150"
      >
        <path
          d="M36.5 73C56.6584 73 73 56.6584 73 36.5C73 16.3416 56.6584 0 36.5 0C16.3416 0 0 16.3416 0 36.5C0 56.6584 16.3416 73 36.5 73Z"
          fill="#0B1B6D"
        />
        <path
          d="M30.8019 55.326L17.1792 42.9467L22.1275 37.5015L30.0057 44.661L48.5219 21.9578L54.2239 26.6077L30.8019 55.326Z"
          fill="white"
        />
      </svg>

      <h1 className="text-white text-2xl md:text-4xl  font-bold tracking-tight mb-4 text-center">
        Sua participação no sorteio foi confirmada!
      </h1>
      <h1 className="text-white text-2xl md:text-4xl  font-bold tracking-tight mb-4">
        O EMBAIXADOR CLASSIC
      </h1>
      <h1 className="text-white text-2xl md:text-4xl  font-bold tracking-tight mb-4 text-center mr-4">
        📍Pedreira Paulo Leminski <br />
      </h1>

      <h1 className="text-white text-2xl md:text-4xl  font-bold tracking-tight mb-4">
        🗓 29.11.2025
      </h1>
    </>
  );
}
