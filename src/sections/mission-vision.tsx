import missionCard from '@/_assets/mission-card.jpg'
import visionCard from '@/_assets/vision-card.jpg'

export function MissionVision() {
  return (
    <section className="bg-gray-background p-10 lg:px-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 out-mission:grid-cols-2">
        <div className="mx-auto max-w-[500px]">
          <span className="font-normal uppercase tracking-widest">
            Nossa Missão
          </span>

          <h4 className="mt-1 text-xl font-bold">
            Garantimos ações inclusivas para proteger o meio ambiente
          </h4>

          <p className="mt-2 text-justify">
            Na EcoAção, acreditamos que o cuidado com o meio ambiente deve ser
            acessível e inclusivo. Atuamos para criar um impacto positivo que
            alcance todas as comunidades, promovendo iniciativas que inspiram a
            preservação e a conscientização ambiental. Juntos, podemos construir
            um planeta mais sustentável para todos.
          </p>

          <img src={missionCard} alt="Card One" className="mt-4 rounded-xl" />
        </div>

        <div className="mx-auto mt-10 max-w-[500px] out-mission:mt-0">
          <span className="font-normal uppercase tracking-widest">
            Nossa Visão
          </span>

          <h4 className="mt-1 text-xl font-bold">
            Promovemos cuidado ambiental para todos ao redor do mundo
          </h4>

          <p className="mt-2 text-justify">
            Sonhamos com um futuro onde o meio ambiente seja valorizado por
            todos. Trabalhamos para unir pessoas, comunidades e culturas em
            ações que promovem sustentabilidade, inclusão e respeito pela
            natureza. Juntos, podemos transformar o mundo em um lugar mais verde
            e acolhedor para as próximas gerações
          </p>

          <img src={visionCard} alt="Card One" className="mt-4 rounded-xl" />
        </div>
      </div>
    </section>
  )
}
