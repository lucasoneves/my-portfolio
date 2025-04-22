export default function About() {
  return (
    <section className="grid grid-cols-1 gap-8 items-start">
      {/* Texto principal */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Sobre mim</h1>

        <p>
          Desde 2014, atuo como Desenvolvedor Front-End com sólida experiência
          em construção de interfaces modernas e funcionais para a web.
        </p>

        <p>
          Tenho domínio de <strong>HTML5</strong>, <strong>CSS3</strong> e{" "}
          <strong>Sass</strong>. Trabalho com <strong>JavaScript</strong> e
          frameworks como <strong>Vue.js</strong>, <strong>React</strong> e{" "}
          <strong>Next.js</strong>.
        </p>

        <p>
          Também possuo experiência com <strong>Gulp</strong>,{" "}
          <strong>Webpack</strong>, <strong>Parcel</strong> e conhecimentos
          básicos em <strong>Node.js</strong>. Já atuei com <strong>SEO</strong>
          , <strong>otimização de performance</strong> e ferramentas de{" "}
          <strong>deploy</strong> e <strong>CI/CD</strong>.
        </p>

        <p>
          Trabalho bem em equipes ágeis, com metodologias como Scrum e Kanban,
          focando sempre na entrega de código limpo, performático e escalável.
        </p>

        {/* Skills visuais */}
        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Tecnologias que uso:</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML5",
              "CSS3",
              "Sass",
              "JavaScript",
              "Vue.js",
              "React",
              "Next.js",
              "Webpack",
              "Gulp",
              "Parcel",
              "Node.js",
              "SEO",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-600 text-sm rounded-full border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
