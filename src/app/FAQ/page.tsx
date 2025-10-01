"use client";

import { HowItWorks } from "@/components/how-it-works";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Input from "@/components/input";
import { cleanCPF } from "@/lib/masks";

export default function FAQ() {
  const [cpf, setCpf] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const cleanedCpf = cleanCPF(cpf);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/translado/check-in?token=${process.env.NEXT_PUBLIC_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
          body: JSON.stringify({ cpf: cleanedCpf }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Check-in realizado com sucesso!");
        setCpf("");
      } else {
        setErrorMessage(
          result.message ||
            "Erro ao realizar check-in.Tente novamente mais tarde."
        );
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrorMessage("Erro ao processar seu check-in. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center font-codec-warm text-white text-lg gap-4 px-4">
        <div className="text-center lg:max-w-[600px]">
          <span className="font-extrabold">
            Agora falta pouco para vivermos o melhor dia do ano!
          </span>
        </div>

        <div className="text-center text-sm font-bold">
          Leia atentamente as informações dessa página para ficar por dentro de
          tudo o que vai acontecer no evento.
        </div>

        <div className="text-center text-sm font-bold">
          No formulário abaixo, garanta o seu lugar no nosso translado oficial
          que transportará você do Dunna ao Curitiba Folia. O translado é
          gratuito.
        </div>

        <div className="w-full mt-4 flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-1 w-full max-w-[267px] md:max-w-[360px] font-montserrat text-sm font-bold"
          >
            <label htmlFor="cpf" className="text-sm ml-2  font-bold">
              CPF
            </label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={handleInputChange}
              placeholder="Digite seu cpf"
              mask="cpf"
              required
            />

            <div className="w-full flex items-center justify-center mt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-folia text-white  items-center justify-center flex   px-4 rounded-[12px] text-sm transition-all duration-300 hover:scale-105 cursor-pointer z-30 disabled:opacity-50 disabled:cursor-not-allowed py-2"
              >
                {isSubmitting
                  ? "Processando..."
                  : "Fazer check-in no translado"}
              </button>
            </div>
          </form>

          {successMessage && (
            <div className="w-full flex items-center justify-center mt-4">
              <p className="text-green-400 text-sm text-center font-bold px-4">
                {successMessage}
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="w-full flex items-center justify-center mt-4">
              <p className="text-white text-sm text-center font-bold px-4">
                {errorMessage}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center font-codec-warm text-white text-lg gap-4 mt-8">
        <div className="  text-center  lg:max-w-[600px] px-2">
          <span className="font-extrabold">
            Que bom ter você na nossa Folia Universitária,
          </span>
          e para sua experiência ser ainda melhor, prepararmos esse FAQ para não
          ficar nenhuma dúvida!
        </div>

        <div className="font-extrabold text-center">
          No sábado você vai viver um combo de experiências!
        </div>

        <ul className="text-sm font-bold text-center px-2 mt-2">
          <li>🎉 Open bar no Dunna pra esquentar</li>{" "}
          <li>💄 Espaço beleza Torriton pra dar um up no visual</li>
          <li>🚌 Translado gratuito direto pro evento</li>
          <li>⚡ Fila VIP Formô pra você não perder tempo</li>
          <li>🍾 Lounge Formô exclusivo dentro do Curitiba Folia</li>
        </ul>

        <div className="flex flex-col gap-1">
          <div className="font-bold text-center mt-2">📅 Programação</div>
          <div className="flex flex-col font-bold gap-1 text-center text-sm">
            <div className="font-montserrat flex gap-1 text-center items-center justify-center">
              <span className="font-montserrat flex gap-1 ">12</span>
              h <ArrowRight size={10} /> Esquenta Formô (Dunna)
            </div>
            <div className="font-montserrat flex gap-1 text-center items-center justify-center">
              <span className="font-montserrat flex gap-1">16</span>h{" "}
              <ArrowRight size={10} /> Translado para Curitiba Folia
            </div>
            <div className="font-montserrat flex gap-1 text-center items-center justify-center">
              <span className="font-montserrat flex gap-1">16</span>h às 23h{" "}
              <ArrowRight size={10} /> Curitiba Folia
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-center px-2 font-bold text-sm font-montserrat mt-2">
          <div>👉 São 11 horas de rolê premium, só para formandos Formô.</div>

          <div>E o melhor: 100% gratuito</div>
        </div>

        <HowItWorks />
      </div>
    </>
  );
}
