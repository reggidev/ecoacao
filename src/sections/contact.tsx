export function Contact() {
  return (
    <section className="p-10 lg:px-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
        <span className="font-semibold uppercase tracking-wider">
          Entre em contato conosco
        </span>

        <h3 className="mt-4 max-w-sm text-3xl font-bold">
          We&apos;d love to hear from you
        </h3>

        <p className="mt-4 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Suspendisse varius enim elementum tristique.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center text-center">
        <div>
          <p className="text-2xl font-bold">Let&apos;s talk!</p>

          <span className="mt-2 block text-gray-600">(00) 00000-0000</span>
          <span className="block text-gray-600">contato@email.com</span>
        </div>

        <div>
          <p className="text-2xl font-bold">Office</p>

          <span className="mt-2 text-gray-600">
            8 Brewery Drive, Lagos, Nigeria.
          </span>
        </div>

        <div>
          <p className="text-2xl font-bold">Another Office</p>

          <span className="mt-2 text-gray-600">
            Opp Opolo round about, Yenagoa, Bayelsa, Nigeria
          </span>
        </div>
      </div>
    </section>
  )
}
