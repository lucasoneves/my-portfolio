"use client";

import { MainButton } from "@/components/ui/MainButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useState } from "react";

export default function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      nome: form.nome.value,
      email: form.email.value,
      mensagem: form.mensagem.value,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
      <p className="text-gray-200 mb-4">
        Acesse minhas redes sociais ou preencha o formulário abaixo e retornarei
        o mais breve possível.
      </p>

      <SocialLinks />

      <form onSubmit={handleSubmit} className="space-y-4 mt-4 w-full md:w-2xl">
        <h3 className="text-xl font-bold mb-4 mt-8">Formulário de contato</h3>
        <div>
          <label htmlFor="nome" className="block font-semibold">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full border border-gray-600 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-600 rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="block font-semibold">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            className="w-full border border-gray-600 rounded p-2"
          ></textarea>
        </div>
        <MainButton
          type="submit"
          disabled={status === "sending"}
          variant="primary"
        >
          {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
        </MainButton>

        {status === "sent" && (
          <p className="text-green-600">Mensagem enviada com sucesso!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Erro ao enviar. Tente novamente.</p>
        )}
      </form>
    </section>
  );
}
