import Link from "next/link";
import { MainButton } from "@/components/ui/MainButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Olá! Eu sou Lucas Neves</h1>
        <p className="text-lg text-gray-400 mb-10">
          Desenvolvedor Front-End com experiência em React, Vue, Next.js e foco
          em performance e acessibilidade.
        </p>
        <MainButton>
          <Link href="/projetos">Ver Projetos</Link>
        </MainButton>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Sobre mim</h2>
        <p className="text-gray-400">
          Desde 2014, atuo como Desenvolvedor Front-End criando interfaces
          modernas e eficientes. Trabalho com frameworks como React, Vue e
          Next.js, com foco em qualidade, performance e acessibilidade.
        </p>
        <Link href="/sobre" className="text-blue-600 hover:underline">
          Saiba mais sobre minha trajetória →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projetos em destaque</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/projetos#projeto1"
            className="border border-gray-300 rounded-xl p-4 hover:shadow-md transition"
          >
            <Image src={} />
            <h3 className="font-bold text-lg">Projeto 1 - Nome</h3>
            <p className="text-gray-300 text-sm">
              Breve descrição do projeto, tecnologias usadas e objetivo.
            </p>
          </Link>
          <Link
            href="/projetos#projeto2"
            className="border border-gray-300 rounded-xl p-4 hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">Projeto 2 - Nome</h3>
            <p className="text-gray-300 text-sm">
              Outro projeto com destaque para performance, acessibilidade e UI.
            </p>
          </Link>
        </div>
        <Link href="/projetos" className="text-blue-600 hover:underline">
          Ver todos os projetos →
        </Link>
      </section>

      <section className="bg-gray-800 p-20 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Entre em contato</h2>
        <p className="text-gray-400 mb-4">
          Vamos conversar sobre como posso ajudar no seu projeto.
        </p>
        <MainButton>
          <Link href="/contato">Entrar em contato</Link>
        </MainButton>
      </section>
    </main>
  );
}
