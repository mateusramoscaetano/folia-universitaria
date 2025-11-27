export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 shadow-xs shadow-white   border-white flex flex-col items-center px-0 pt-8 pb-10 rounded-[50px] min-h-full w-full backdrop-blur-xs  max-w-[1216px] bg-transparent relative overflow-hidden z-40">
      {children}
    </div>
  );
}

export function CardHeader() {
  return (
    <>
      <h1 className="text-white mt-5 md:mt-15   text-2xl md:text-5xl font-codec-cold font-bold tracking-tight">
        Sorteio ingresso
      </h1>

      <h1 className="text-white text-2xl md:text-5xl font-codec-cold font-bold tracking-tight">
        Gusttavo Lima
      </h1>

      <h1 className="text-white text-2xl md:text-5xl font-codec-cold font-bold tracking-tight">
        O Embaixador Classic
      </h1>
    </>
  );
}
