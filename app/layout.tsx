import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"

const siteUrl = "https://talpatunneling.webs.upv.es"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Talpa Tunneling UPV | Microtuneladora Not-a-Boring Competition 2025",
    template: "%s | Talpa Tunneling UPV"
  },
  description:
    "Talpa Tunneling UPV - Equipo de estudiantes de la Universidad Politécnica de Valencia desarrollando microtuneladoras innovadoras para la Not-a-Boring Competition 2025. Tecnología de vanguardia en tunelización subterránea.",
  keywords: [
    "Talpa Tunneling",
    "Talpa Tunneling UPV",
    "Talpa UPV",
    "microtuneladora",
    "tuneladora",
    "Not-a-Boring Competition",
    "Not a Boring Competition 2025",
    "UPV Valencia",
    "Universidad Politécnica de Valencia",
    "ingeniería UPV",
    "competición ingeniería",
    "innovación subterránea",
    "transporte subterráneo",
    "tecnología tunelización",
    "estudiantes ingeniería Valencia",
    "Elon Musk Boring Company",
    "excavación automatizada",
    "túneles inteligentes"
  ],
  authors: [
    { name: "Talpa Tunneling UPV", url: siteUrl }
  ],
  creator: "Talpa Tunneling UPV",
  publisher: "Talpa Tunneling UPV",
  alternates: {
    canonical: siteUrl,
    languages: {
      'es-ES': siteUrl,
      'en-US': siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Talpa Tunneling UPV",
    title: "Talpa Tunneling UPV | Microtuneladora Not-a-Boring Competition 2025",
    description: "Equipo de estudiantes de la UPV desarrollando microtuneladoras de vanguardia para revolucionar el transporte subterráneo. Not-a-Boring Competition 2025.",
    images: [
      {
        url: `${siteUrl}/eventos/IMG_3610.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipo Talpa Tunneling UPV - Microtuneladora",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/logo.png`,
        width: 800,
        height: 800,
        alt: "Logo Talpa Tunneling UPV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talpa Tunneling UPV | Microtuneladora Not-a-Boring Competition",
    description: "Desarrollamos microtuneladoras de vanguardia. Equipo UPV en la Not-a-Boring Competition 2025.",
    images: [`${siteUrl}/eventos/IMG_3610.jpg`],
    creator: "@TalpaTunneling",
    site: "@TalpaTunneling",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'nrtv48qLUSyhnjcSwwx4PLQzNXbU2FNZjaefV5_ib8s',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Datos estructurados JSON-LD para SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talpa Tunneling UPV",
    "alternateName": "Talpa UPV",
    "url": "https://talpatunneling.webs.upv.es",
    "logo": "https://talpatunneling.webs.upv.es/logo.png",
    "description": "Equipo de estudiantes de la Universidad Politécnica de Valencia desarrollando microtuneladoras innovadoras para la Not-a-Boring Competition 2025",
    "sameAs": [
      "https://www.instagram.com/talpa_tunneling_upv/",
      "https://www.linkedin.com/company/talpa-tunneling-upv/",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "talpatunnelingupv@gmail.com",
      "contactType": "General Inquiries",
      "areaServed": "ES",
      "availableLanguage": ["Spanish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Edificio 4Q, Camino de Vera, s/n",
      "addressLocality": "Valencia",
      "postalCode": "46022",
      "addressCountry": "ES"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Universidad Politécnica de Valencia",
      "url": "https://www.upv.es"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Talpa Tunneling UPV",
    "url": "https://talpatunneling.webs.upv.es",
    "description": "Desarrollamos microtuneladoras de vanguardia para la Not-a-Boring Competition 2025",
    "inLanguage": ["es-ES", "en-US"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://talpatunneling.webs.upv.es/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="es" className="dark" suppressHydrationWarning={true}>
      <body className="font-sans bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TranslationProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieBanner />
            </div>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
