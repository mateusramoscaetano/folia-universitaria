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
        Lista Exclusiva
      </h1>
      <h1 className="text-white  md:mb-5 text-2xl md:text-5xl font-codec-cold font-bold tracking-tight flex items-center justify-center gap-2 ">
        Formô{" "}
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8163 2.44023C14.9997 -0.380285 12.208 0.841714 9.97106 2.84757C7.74277 0.829195 4.9781 -0.426508 2.13062 2.40268C-0.085161 4.60786 -0.10057 8.16119 2.11425 10.3645C7.3136 15.0637 9.91297 17.4095 9.91232 17.4018C9.91232 17.4018 9.92002 17.4278 17.7913 10.4059C20.0234 8.20356 20.0205 4.65216 17.8163 2.44023Z"
            fill="#0B1B6D"
          />
        </svg>
        CuritibaFolia
      </h1>
    </>
  );
}
