import CurriculoButton from "@/components/CurriculoButton";

export default function Curriculo() {
  return (
    <section>
      <header className="flex gap-4 items-center justify-start">
        <h1 className="text-3xl font-bold">Currículo</h1>
        <CurriculoButton />
      </header>

      <div className="mt-8 space-y-2 ">
        <h2 className="text-xl font-semibold">Resumo Profissional</h2>
        <p className="text-gray-400">
          Desenvolvedor Front-End com ampla experiência na criação e manutenção
          de interfaces web responsivas e eficazes. Atuo desde 2014 com foco em
          entregar soluções de alta qualidade, colaborando com squads
          multidisciplinares e metodologias ágeis.
        </p>
      </div>

      <div className="mt-8 space-y-2 ">
        <h2 className="text-xl font-semibold">Skills Técnicas</h2>
        <ul className=" flex flex-col gap-2 list-disc list-inside">
          {[
            "HTML, CSS (Sass, Styled-components, Tailwind, Bootstrap)",
            "JavaScript (ES6+), TypeScript, jQuery",
            "React (Redux, Hooks, Next.js)",
            "Vue (Vue 2/3, Nuxt.js, VueX, Pinia)",
            "Integração com APIs REST",
            "Testes: Jest, Vitest",
            "GIT, Mobile First, Webpack, Vite, Parcel",
            "Performance, acessibilidade e crossbrowser",
            "Node.js, Express, PostgreSQL com Prisma",
          ].map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-2 ">
        <h2 className="text-xl font-semibold mb-2">Formação Acadêmica</h2>
        <p className="text-gray-400">
          <strong>Tecnologia em Sistemas para Internet</strong> (2010 - 2012) -
          Incompleto
          <br />
          Faculdades Metropolitanas Unidas
        </p>
      </div>

      {/* Experiência */}
      <div className="mt-8 space-y-20">
        <h2 className="text-xl font-semibold mb-4">Experiência Profissional</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    company: "RedQuarter",
    period: "03/2023 - atual",
    description:
      "Desenvolvimento e manutenção em HTML/CSS (Sass), Git, Mobile First, testes crossbrowser (Browserstack) e JS.",
  },
  {
    company: "Wayon (Grupo Raia Drogasil)",
    period: "02/2021 - 01/2023",
    description:
      "Desenvolvimento de features e manutenção no Terminal de Consulta, usando React, Redux, Hooks, Context e jQuery.",
  },
  {
    company: "DOC88",
    period: "06/2019 - 09/2020",
    description:
      "Implementação de sistemas do zero com Vue.js e integração com APIs em Laravel via Axios. Contato com DEVOPS.",
  },
  {
    company: "Fullbar Digital",
    period: "02/2018 - 04/2019",
    description:
      "Desenvolvimento de web apps, sites para campanhas e clientes como Petrobras, Whirlpool, etc. Integração com .NET.",
  },
  {
    company: "Lion Agency",
    period: "02/2017 - 02/2018",
    description:
      "Landing pages, sites institucionais, email marketing. Integrações com APIs via jQuery.",
  },
  {
    company: "Serasa Experian",
    period: "03/2016 - 02/2017",
    description:
      "Implementação de páginas e sites para novos produtos com HTML, CSS, JS e jQuery.",
  },
  {
    company: "Grupo Nexo",
    period: "01/2016 - 02/2016",
    description:
      "Apresentações de medicamentos e produtos, usando Veeva. Desenvolvimento de hotsites e landing pages.",
  },
  {
    company: "FreeAd Comunicação",
    period: "05/2015 - 01/2016",
    description:
      "Sites institucionais, landing pages e email marketing, atuando próximo à equipe de marketing.",
  },
  {
    company: "Ecommerce Consulting",
    period: "06/2014 - 02/2015",
    description:
      "Implantação e manutenção de e-commerces com Ciashop (Vtex Group) e sites institucionais.",
  },
];
