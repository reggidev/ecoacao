export function Contact() {
  return (
    <section className="flex h-screen-minus-header-footer flex-col items-center justify-center p-10 lg:px-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
        <span className="font-semibold uppercase tracking-wider">
          Entre em contato conosco
        </span>

        <h3 className="mt-4 max-w-md text-3xl font-bold">
          Estamos prontos para ouvir você
        </h3>

        <p className="mt-4 text-zinc-600">
          Envie suas dúvidas, sugestões ou ideias. Estamos aqui para construir
          um futuro mais sustentável, ouvindo e colaborando com você a cada
          passo.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-lg grid-cols-1 items-center justify-center gap-4 text-center md:grid-cols-2">
        <div>
          <span className="text-xl font-bold">Entre em contato</span>
          <p className="text-muted-foreground">(00) 00000-0000</p>
          <p className="text-muted-foreground">ecoacao@contato.com</p>
        </div>

        <div>
          <span className="text-xl font-bold">Escritório</span>
          <p className="text-muted-foreground">São Paulo, Brasil.</p>
        </div>
      </div>
    </section>
  )
}
