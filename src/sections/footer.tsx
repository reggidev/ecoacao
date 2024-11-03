export function Footer() {
  return (
    <footer className="bg-black px-10 py-4 text-white">
      <div className="flex items-center justify-center text-center">
        <div>
          <p>
            Criado por{' '}
            <a
              href="https://reggidev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              ReggiDev
            </a>{' '}
            | Todos direitos reservados - &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
