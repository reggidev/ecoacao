import { Contribute } from '@/sections/contribute'
import { Footer } from '@/sections/footer'
import { Header } from '@/sections/header'
import { Hero } from '@/sections/hero'
import { KnowAboutUs } from '@/sections/know-about-us'
import { Projects } from '@/sections/projects'

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <KnowAboutUs />
      <Projects />
      <Contribute />
      <Footer />
    </>
  )
}
