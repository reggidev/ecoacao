import missionCard from '@/_assets/mission-card.jpg'
import visionCard from '@/_assets/vision-card.jpg'

export function MissionVision() {
  return (
    <section className="bg-gray-background p-10 lg:px-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 out-mission:grid-cols-2">
        <div className="mx-auto max-w-[500px]">
          <span className="font-normal uppercase tracking-widest">
            our mission
          </span>

          <h4 className="mt-1 text-xl font-bold">
            We make sure to provide inclusive care for children with special
            needs
          </h4>

          <p className="mt-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>

          <img src={missionCard} alt="Card One" className="mt-4 rounded-xl" />
        </div>

        <div className="mx-auto mt-10 max-w-[500px] out-mission:mt-0">
          <span className="font-normal uppercase tracking-widest">
            our Vision
          </span>

          <h4 className="mt-1 text-xl font-bold">
            Provide more inclusive care to children around the world
          </h4>

          <p className="mt-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>

          <img src={visionCard} alt="Card One" className="mt-4 rounded-xl" />
        </div>
      </div>
    </section>
  )
}
