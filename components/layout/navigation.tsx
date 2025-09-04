"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageSelector } from "@/components/ui/language-selector"
import { useTranslation } from "@/hooks/use-translation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.team"), href: "/equipo" },
    { name: t("navigation.tunneler"), href: "/tuneladora" },
    { name: t("navigation.sponsors"), href: "/patrocinadores" },
    { name: t("navigation.press"), href: "/prensa" },
    { name: t("navigation.events"), href: "/eventos" },
    { name: t("navigation.faq"), href: "/faq" },
    { name: t("navigation.contact"), href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_blanco.svg"
              alt="Talpa Tunneling Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-bold text-xl">Talpa Tunneling UPV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#00338d] ${
                  pathname === item.href ? "text-[#00338d]" : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button asChild className="btn-primary">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">{t("navigation.join")}</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-white/10">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-[#00338d] ${
                      pathname === item.href ? "text-[#00338d]" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <LanguageSelector />
                  <Button asChild className="btn-primary w-full mt-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">{t("hero.joinTeam")}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
