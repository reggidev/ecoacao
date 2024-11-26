import { MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NavLink } from '@/components/nav-link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'Sobre nós',
    href: '/sobre-nos',
  },
]

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 bg-white px-8 py-6 shadow-lg lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="cursor-pointer text-2xl font-bold tracking-tighter"
        >
          <span>EcoAção</span>
        </Link>

        {/* Desktop NavBar */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6 font-medium tracking-tight text-gray-500">
            {navLinks.map((link) => (
              <li key={link.id} className="cursor-pointer hover:text-primary">
                <NavLink to={link.href}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex">
          <Link to="/contato">
            <Button className="w-28 text-sm tracking-tight text-black">
              Contato
            </Button>
          </Link>
        </div>

        {/* Mobile NavBar */}
        <nav className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon">
                <span className="sr-only">Abrir menu de navegação</span>
                <MenuIcon size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navLinks.map((link) => (
                  <div key={link.id} className="items-center gap-4">
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        className="w-full text-sm font-semibold uppercase tracking-tight hover:bg-primary"
                        asChild
                      >
                        <Link to={link.href} className="text-right">
                          {link.title}
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                ))}
              </div>
              <Link to="/contato">
                <Button className="w-full text-sm font-semibold uppercase tracking-tight text-black">
                  Contato
                </Button>
              </Link>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
