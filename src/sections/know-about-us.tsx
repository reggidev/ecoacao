import knowAboutUs from '@/assets/know-about-us.jpg'

export function KnowAboutUs() {
  return (
    <section className="px-10 pt-10 lg:px-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row">
        <div className="mx-auto max-w-lg lg:w-2/3">
          <span className="font-bold uppercase tracking-wider">
            Know about us
          </span>

          <h2 className="mt-4 max-w-sm text-3xl font-bold">
            We provide a place for children with special needs
          </h2>

          <div className="mt-6 text-zinc-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p className="mt-4">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
          </div>

          <a href="#">
            <div className="mt-8 inline-block rounded-lg border bg-primary px-8 py-4 text-center font-medium transition-all duration-200 hover:border hover:border-secondary hover:bg-secondary">
              Learn more
            </div>
          </a>
        </div>

        <div className="know-about-us:block mx-auto hidden lg:h-1/3">
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
