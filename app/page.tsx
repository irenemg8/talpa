import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { SubsystemsSection } from "@/components/sections/subsystems-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Talpa Tunneling UPV | Microtuneladora Not-a-Boring Competition 2025",
  description:
    "Talpa Tunneling UPV es un equipo de estudiantes de la Universidad Politécnica de Valencia desarrollando microtuneladoras innovadoras para la Not-a-Boring Competition 2025. On the boring edge - Tecnología de vanguardia en tunelización subterránea.",
  keywords: [
    "Talpa Tunneling",
    "Talpa Tunneling UPV",
    "Talpa UPV",
    "microtuneladora UPV",
    "Not-a-Boring Competition 2025",
    "Not a Boring Competition Valencia",
    "equipo UPV ingeniería",
    "tuneladora estudiantes",
    "competición tunelización",
    "innovación subterránea UPV",
    "Elon Musk Boring Company",
  ],
  openGraph: {
    title: "Talpa Tunneling UPV | On the boring edge",
    description:
      "Equipo de estudiantes de la UPV desarrollando microtuneladoras de vanguardia para la Not-a-Boring Competition 2025. Únete a la revolución subterránea.",
    url: "https://talpatunneling.webs.upv.es/",
    type: "website",
    images: [
      {
        url: "https://talpatunneling.webs.upv.es/eventos/IMG_3610.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo Talpa Tunneling UPV trabajando en la microtuneladora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talpa Tunneling UPV | On the boring edge",
    description:
      "Desarrollamos microtuneladoras de vanguardia para la Not-a-Boring Competition 2025. Únete al futuro del transporte subterráneo.",
  },
  alternates: {
    canonical: "https://talpatunneling.webs.upv.es/",
  },
}

export default function HomePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://talpatunneling.webs.upv.es/",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <StatsSection />
        <SubsystemsSection />
        <CTASection />
      </main>
    </>
  )
}
