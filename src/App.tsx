import { Contribute } from './sections/contribute'
import { Header } from './sections/header'
import { Hero } from './sections/hero'
import { KnowAboutUs } from './sections/know-about-us'

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <KnowAboutUs />
      <Contribute />
    </>
  )
}
