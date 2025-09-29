"use client";

import { useState } from "react";
import Input from "@/components/input";
import WhatsAppInput from "@/components/whatsapp-input";
import { cleanWhatsApp, cleanCPF } from "@/lib/masks";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  cpf: string;
  whatsapp: string;
  isGuest?: string;
  gradeOrName?: string;
}

export default function Cadastro() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    cpf: "",
    whatsapp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isNotGraduate, setIsNotGraduate] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsNotGraduate(checked);
    if (!checked) {
      setFormData((prev) => ({
        ...prev,
        isGuest: undefined,
        gradeOrName: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const cleanedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        cpf: cleanCPF(formData.cpf),
        whatsapp: cleanWhatsApp(formData.whatsapp),
        ...(formData.isGuest && { isGuest: formData.isGuest }),
        ...(formData.gradeOrName && {
          gradeOrName: formData.gradeOrName.trim(),
        }),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?token=${process.env.NEXT_PUBLIC_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
          body: JSON.stringify(cleanedData),
        }
      );

      const result = await response.json();

      if (result.summary.process) {
        router.push("/sucesso");
      } else {
        if (result.error === "not-adered") {
          setErrorMessage(
            "Não encontramos seu nome na base de formandos da Formô. Por isso, seu pré-cadastro não foi concluído. Caso você seja formando, entre em contato com nosso atendimento."
          );
        } else {
          setErrorMessage("Erro ao processar seu cadastro. Tente novamente.");
        }
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrorMessage("Erro ao processar seu cadastro. Tente novamente.");
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
            id="name"
            name="name"
            value={formData.name}
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

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isNotGraduate"
              checked={isNotGraduate}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-folia bg-white border-gray-300 rounded focus:ring-blue-folia focus:ring-2"
            />
            <label
              htmlFor="isNotGraduate"
              className="text-white text-sm font-bold"
            >
              Não sou Formô ainda
            </label>
          </div>

          {isNotGraduate && (
            <div className="w-full space-y-4">
              <select
                name="isGuest"
                value={formData.isGuest || ""}
                onChange={handleInputChange}
                required
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-[12px] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-folia"
              >
                <option value="">Selecione uma opção</option>
                <option value="commercial">Convidado do Comercial</option>
                <option value="guest">Acompanhante do Formando</option>
              </select>

              {(formData.isGuest === "commercial" ||
                formData.isGuest === "guest") && (
                <Input
                  type="text"
                  id="gradeOrName"
                  name="gradeOrName"
                  value={formData.gradeOrName || ""}
                  onChange={handleInputChange}
                  placeholder={
                    formData.isGuest === "commercial"
                      ? "Digite sua turma"
                      : "Digite o nome do formando que você está acompanhando"
                  }
                  required
                />
              )}
            </div>
          )}

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
        {errorMessage && (
          <div className="w-full flex items-center justify-center mt-4">
            <p className="text-white text-sm text-center font-bold  px-4">
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
