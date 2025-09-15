"use client";

import { useState } from "react";
import Input from "@/components/input";
import WhatsAppInput from "@/components/whatsapp-input";
import { cleanWhatsApp, cleanCPF } from "@/lib/masks";
import { useRouter } from "next/navigation";

interface FormData {
  nome: string;
  email: string;
  cpf: string;
  whatsapp: string;
}

export default function Cadastro() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    cpf: "",
    whatsapp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const cleanedData = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        cpf: cleanCPF(formData.cpf),
        whatsapp: cleanWhatsApp(formData.whatsapp),
      };

      console.log("Dados limpos para envio:", cleanedData);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      router.push("/sucesso");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-white mt-3  text-xl mb-3  font-bold tracking-tight text-center">
        Voce está quase lá!
      </h1>

      <p className="text-white  font-bold text-sm md:text-base mb-2 text-center max-w-[250px]">
        Garanta seu pré-cadastro preenchendo os dados abaixo.
      </p>

      <div className="w-full  mt-8 px-4 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-[267px] md:max-w-[360px]"
        >
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite seu nome completo"
            required
          />

          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />

          <Input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
            placeholder="000.000.000-00"
            mask="cpf"
            required
          />

          <WhatsAppInput
            value={formData.whatsapp}
            onChange={handleInputChange}
            required
          />

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-folia text-white max-w-[200px] md:max-w-[267px]   items-center justify-center flex h-[33px] md:h-[33px] py-2 px-4 rounded-[12px] text-sm transition-all duration-300 hover:scale-105 cursor-pointer z-30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar pré-cadastro!"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
