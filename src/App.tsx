export function App() {
  return (
    <section className="h-[750px] w-full bg-hero-background bg-cover bg-bottom bg-no-repeat">
      <div className="container mx-auto flex h-full flex-col items-center justify-center px-10 lg:items-start">
        <h1 className="max-w-[500px] text-center text-5xl font-bold text-white lg:text-left">
          Inclusive care for children with special needs
        </h1>

        <a href="#">
          <div className="mt-12 rounded-lg border bg-white px-8 py-4 transition-all duration-200 hover:border hover:border-secondary hover:bg-primary">
            What we do
          </div>
        </a>

        <div className="mt-12 flex flex-col items-center justify-center lg:items-start">
          <span className="text-lg text-white">
            230 children under our care
          </span>
          <span className="text-lg text-white">58 donations collected</span>
        </div>
      </div>
    </section>
  )
}
