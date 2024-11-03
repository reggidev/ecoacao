export function Projects() {
  return (
    <section className="bg-black p-10 lg:px-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <span className="font-semibold uppercase tracking-wider text-white">
          Projetos que realizamos
        </span>

        <span className="mt-4 block max-w-lg text-center text-3xl font-bold text-white">
          Trabalhamos por um planeta onde a vida floresce
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        {/* First Card */}
        <div className="relative flex h-[375px] w-[350px] flex-col justify-between rounded-[20px] bg-card-one bg-cover bg-center p-12 pt-20 text-white">
          {/* Opacity overlay */}
          <div className="absolute inset-0 rounded-[20px] bg-black opacity-50" />

          <div className="relative z-10">
            <span className="text-[1.75rem] font-bold leading-tight">
              Mutirão Verde: Reflorestamento Comunitário
            </span>
            <p className="mt-4">
              Mobilizamos voluntários para plantar árvores e restaurar áreas
              desmatadas, promovendo um ambiente saudável.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-card-two relative flex h-[375px] w-[350px] flex-col justify-between rounded-[20px] bg-cover bg-center p-12 pt-20 text-white">
          {/* Opacity overlay */}
          <div className="absolute inset-0 rounded-[20px] bg-black opacity-50" />

          <div className="relative z-10">
            <span className="text-[1.75rem] font-bold leading-tight">
              Excursões Ecológicas Semanais
            </span>
            <p className="mt-4">
              Promovemos atividades educativas ao ar livre, onde participantes
              aprendem sobre a biodiversidade e a importância da conservação.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-card-three relative flex h-[375px] w-[350px] flex-col justify-between rounded-[20px] bg-cover bg-center p-12 pt-20 text-white">
          {/* Opacity overlay */}
          <div className="absolute inset-0 rounded-[20px] bg-black opacity-50" />

          <div className="relative z-10">
            <span className="text-[1.75rem] font-bold leading-tight">
              Campanhas Mensais de Conscientização
            </span>
            <p className="mt-4">
              Realizamos ações para informar a comunidade sobre questões
              ambientais, incentivando práticas sustentáveis e a proteção do
              planeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
