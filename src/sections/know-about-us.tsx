import knowAboutUs from '@/_assets/know-about-us.jpg'

export function KnowAboutUs() {
  return (
    <section className="p-10 lg:px-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row">
        <div className="mx-auto max-w-lg lg:w-2/3">
          <span className="font-semibold uppercase tracking-wider">
            Saiba mais sobre nós
          </span>

          <h2 className="mt-4 max-w-sm text-3xl font-bold">
            Promovemos um futuro sustentável para todos
          </h2>

          <div className="mt-6 text-zinc-600">
            <p>
              Nossas iniciativas buscam restaurar ecossistemas e incentivar o
              cuidado com o meio ambiente, garantindo um futuro mais verde para
              todos
            </p>
            <p className="mt-4">
              Desenvolvemos projetos que promovem práticas sustentáveis e
              incentivam a proteção ambiental. Nosso compromisso é levar
              informação e engajamento para que todos possam contribuir com a
              preservação do planeta
            </p>
          </div>
        </div>

        <div className="mx-auto hidden lg:h-1/3 know-about-us:block">
          <div className="relative h-[580px] w-[400px] overflow-hidden rounded-[20px] shadow-lg">
            <img
              src={knowAboutUs}
              alt="##"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
