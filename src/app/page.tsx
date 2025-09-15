import Card from "@/components/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-yellow-folia font-montserrat font-extrabold md:text-[64px] text-[32px] mb-5 md:mb-10">
          04.OUT
        </h1>
        <p className="text-yellow-folia  font-codec-cold font-bold text-center tracking-tight leading-normal -mt-3 text-xs px-4 md:text-2xl">
          O Folia Universitária chega para transformar a forma como os formandos
          vivem o <br /> CuritibaFolia. Essa não é só a maior micareta do
          Paraná, é uma experiência exclusiva <br /> para quem é Formô, com:
        </p>

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
          <div className="flex flex-col items-center justify-center gap-8 px-4 text-center text-xs md:text-[16px]">
            <h2 className="text-center text-blue-folia  font-extrabold leading-tight tracking-tight mt-6">
              Não é só a experiência em uma das maiores micaretas do Brasil, é a
              chance de viver essa experiência de um jeito único, com <br />
              vantagens que ninguém mais terá.
            </h2>

            <p className="text-center text-blue-folia  font-extrabold leading-tight">
              Esse pré-cadastro garante sua prioridade nessa experiência!
            </p>
            <Link
              href="/cadastro"
              className="bg-blue-folia text-white  font-extrabold leading-tight h-[50px] md:h-[58px] w-full mt-2 md:mt-6 py-2 px-4 rounded-[10px] text-lg max-w-[350px] transition-all duration-300 hover:scale-105 cursor-pointer z-30 flex items-center justify-center"
            >
              Garantir meu Pré Cadastro
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
