export function Hero() {
  return (
    <section className="h-[750px] w-full bg-hero-background bg-cover bg-bottom bg-no-repeat">
      <div className="mx-auto flex h-full max-w-[1175px] flex-col items-center justify-center px-10 know-about-us:items-start">
        <h1 className="max-w-[600px] text-center text-5xl font-bold text-white know-about-us:text-left">
          Cuidando do planeta para as próximas gerações
        </h1>

        <a href="#">
          <div className="mt-12 rounded-lg border bg-white px-8 py-4 transition-all duration-200 hover:border hover:border-secondary hover:bg-primary">
            Nossas ações
          </div>
        </a>
      </div>
    </section>
  )
}
