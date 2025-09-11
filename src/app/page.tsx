import Image from "next/image";

export default function Home() {
  return (
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

        <Image
          src="/elemento-web.png"
          alt="logo"
          width={500}
          height={500}
          className="absolute top-60 xmd:top-80 left-0 "
        />

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

        <div className="mt-5 shadow-xs shadow-white  border-white flex flex-col items-center px-0 pt-8 pb-10 rounded-[50px] min-h-full w-full backdrop-blur-xs z-20 max-w-[1216px] bg-transparent relative">
          {/* <Image
            src="/elemento-web.png"
            alt="logo"
            width={700}
            height={500}
            className="absolute -top-40 left-0 -z-10"
          /> */}
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <Image
              src="/04.OUT.svg"
              alt="04.OUT"
              width={165}
              height={124}
              className="-mt-8 md:w-[358px] md:h-auto"
            />
            <p className="text-yellow-folia  font-codec-cold font-bold text-center tracking-tight leading-normal -mt-3 text-xs px-4 md:text-2xl">
              O Folia Universitária chega para transformar a forma como os
              formandos vivem o <br /> CuritibaFolia. Essa não é só a maior
              micareta do Paraná, é uma experiência exclusiva <br /> para quem é
              Formô, com:
            </p>

            <Image
              src="/ESQUENTA.svg"
              alt="ESQUENTA"
              width={191}
              height={107}
              className="-mt-4 md:w-[358px] md:h-auto"
            />

            <div className="flex flex-col items-center justify-center  -mt-5 md:-mt-10 w-full text-[13px] md:text-2xl">
              <div className="flex items-center justify-center font-codec-warm  text-white font-bold">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
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

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
                <div className="flex items-center justify-center mr-2 mt-1">
                  Open Bar Exclusivo
                </div>
              </div>

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
                <div className="flex items-center justify-center mr-2 mt-1">
                  Djs Especiais
                </div>
              </div>

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
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

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
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

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-6">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
                <div className="flex items-center justify-center mr-2 mt-1">
                  Fila Diferenciada
                </div>
              </div>

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
                <div className="flex items-center justify-center mr-2 mt-1">
                  Pulseira especial
                </div>
              </div>

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
                <div className="flex items-center justify-center tracking-tight mt-1">
                  Área premium Formô com ativações e lounge
                </div>
              </div>

              <div className="flex items-center justify-center font-codec-warm  text-white font-bold -mt-2">
                <Image
                  src="/estrela.png"
                  alt="estrela"
                  width={39}
                  height={37}
                />
                <div className="flex items-center justify-center mr-2 mt-1">
                  Mais surpresas
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-8 px-4 text-center text-xs md:text-[16px]">
                <h2 className="text-center text-blue-folia font-codec-warm font-extrabold leading-tight tracking-tight mt-6">
                  Não é só a experiência em uma das maiores micaretas do Brasil,
                  é a chance de viver essa experiência de um jeito único, com{" "}
                  <br />
                  vantagens que ninguém mais terá.
                </h2>

                <p className="text-center text-blue-folia font-codec-warm font-extrabold leading-tight">
                  Esse pré-cadastro garante sua prioridade nessa experiência!
                </p>
                <button className="bg-blue-folia text-white font-codec-warm font-extrabold leading-tight h-[50px] md:h-[58px] w-full mt-6 py-2 px-4 rounded-[10px] text-lg max-w-[350px]">
                  Garantir meu Pré Cadastro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex items-center justify-center">
        <Image
          src="/atracoes.svg"
          alt="atracoes"
          width={1000}
          height={607}
          className="-mt-15 scale-150 relative z-30 object-cover -ml-6 xmd:ml-0"
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
  );
}
