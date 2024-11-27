import { Link as ScrollLink } from 'react-scroll'

export function Hero() {
  return (
    <section className="relative h-[750px] w-full bg-hero-background bg-cover bg-bottom bg-no-repeat">
      {/* Escurecer imagem */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo do Hero */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1175px] flex-col items-center justify-center px-10 know-about-us:items-start">
        <h1 className="max-w-[600px] text-center text-5xl font-bold text-white know-about-us:text-left">
          Cuidando do planeta para as próximas gerações
        </h1>

        <ScrollLink
          to="projects"
          href="projects"
          spy={true}
          smooth={true}
          offset={-88}
          duration={500}
          className="mt-8"
        >
          <div className="rounded-lg border bg-white px-6 py-4 transition-all duration-200 hover:border hover:border-secondary hover:bg-primary">
            Nossas ações
          </div>
        </ScrollLink>
      </div>
    </section>
  )
}
