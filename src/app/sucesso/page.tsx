import Image from "next/image";

export default function Sucesso() {
  return (
    <>
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

      <h1 className="text-white text-2xl md:text-4xl  font-bold tracking-tight mb-4">
        Seu pré-cadastro foi confirmado!
      </h1>
      <h1 className="text-white text-2xl md:text-4xl  font-bold tracking-tight mb-4">
        04 OUT | 12H - 23H
      </h1>

      <Image
        src="/ESQUENTA.svg"
        alt="ESQUENTA"
        width={191}
        height={107}
        className="-mt-4 md:w-[358px] md:h-auto"
      />

      <div className="flex flex-col items-center justify-center  -mt-5 md:-mt-15 w-full text-[13px] md:text-2xl">
        <div className="flex items-center justify-center   text-white font-bold">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-1">
              Dunna Club
            </div>
            <Image
              src="/logo-dunna.svg"
              alt="logo-dunna"
              width={34}
              height={16}
              className="ml-4 scale-125"
            />
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center mr-2 mt-1">
            Open Bar Exclusivo
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center mr-2 mt-1">
            Djs Especiais
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-1">
              Espaço Beleza By Torriton
            </div>
            <Image
              src="/logo-torriton.svg"
              alt="logo-torriton"
              width={56}
              height={10}
              className="ml-4"
            />
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center mr-2 mt-1">
            Translado do esquenta ao evento
          </div>
        </div>

        <Image
          src="/CURITIBAFOLIA.svg"
          alt="CURITIBAFOLIA"
          width={195}
          height={110}
          className="-mt-4 md:w-[358px] md:h-auto"
        />

        <div className="flex items-center justify-center  text-white font-bold -mt-5 md:-mt-15">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center mr-2 mt-1">
            Fila Diferenciada
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center mr-2 mt-1">
            Pulseira especial
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center tracking-tight mt-1">
            Área premium Formô com ativações e lounge
          </div>
        </div>

        <div className="flex items-center justify-center   text-white font-bold -mt-2">
          <Image src="/estrela.png" alt="estrela" width={39} height={37} />
          <div className="flex items-center justify-center mr-2 mt-1">
            Mais surpresas
          </div>
        </div>
      </div>
    </>
  );
}
