import ProjectCard from "@/components/ProjectCard";
import LinkSection from "@/components/LinkSection";

import { datoCMSClient } from "@/utils/datocms";
import { PROJECTS_QUERY } from "@/utils/queries";
import { ProjectsResponse } from "@/utils/types";
import MainLinkButton from "@/components/ui/MainLinkButton";

const data = await datoCMSClient.request<ProjectsResponse>(PROJECTS_QUERY);

const projects = data.allProjects;

export function Projects() {
  return (
    <section className="my-20 flex flex-col gap-5">
      <h2 className="text-2xl font-semibold">Projetos em destaque</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            path={project.href}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <LinkSection path="/projetos" title="Ver todos os projetos" />
    </section>
  );
}

export function Summary() {
  return (
    <section className="text-center my-20">
      <h1 className="text-4xl font-bold">Olá! Eu sou Lucas Neves</h1>
      <p className="text-lg text-gray-400 my-5">
        Desenvolvedor Front-End com experiência em React, Vue, Next.js e foco em
        performance e acessibilidade.
      </p>
      <MainLinkButton title="Ver Projetos" path="/projetos" />
    </section>
  );
}

export function About() {
  return (
    <section className="my-20">
      <h2 className="text-2xl font-semibold">Sobre mim</h2>
      <p className="text-gray-400 my-5">
        Desde 2014, atuo como Desenvolvedor Front-End criando interfaces
        modernas e eficientes. Trabalho com frameworks como React, Vue e
        Next.js, com foco em qualidade, performance e acessibilidade.
      </p>

      <LinkSection path="/sobre" title="Saiba mais sobre minha trajetória" />
    </section>
  );
}

export function Contact() {
  return (
    <section className="bg-gray-800 py-10 px-6 sm:p-20 rounded-xl text-center">
      <h2 className="text-2xl font-semibold mb-2">Entre em contato</h2>
      <p className="text-gray-400 mb-6">
        Vamos conversar sobre como posso ajudar no seu projeto.
      </p>

      <MainLinkButton title="Entrar em contato" path="/contato" />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Summary />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
