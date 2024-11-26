import { Link } from 'react-router-dom'

export function Contribute() {
  return (
    <section className="px-10 py-10 lg:px-32">
      <div className="mx-auto flex h-[384px] max-w-[1100px] flex-col items-center justify-center rounded-[20px] bg-contribute-background bg-cover bg-no-repeat">
        <span className="max-w-[900px] px-10 text-center text-2xl font-bold text-white md:text-5xl">
          Você pode contribuir para preservar o nosso planeta
        </span>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
          <Link to="/contato">
            <div className="rounded-lg border bg-primary px-8 py-4 text-center font-medium transition-all duration-200 hover:border hover:border-secondary hover:bg-secondary">
              Venha ser um voluntário
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
