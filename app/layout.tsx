import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"

export const metadata: Metadata = {
  title: "Talpa Tunneling UPV | Microtuneladora",
  description:
    "Equipo de generación espontánea desarrollando una microtuneladora para la Not a Boring Competition. Únete a la innovación subterránea.",
  keywords: "tuneladora, ingeniería, UPV, competición, innovación, transporte subterráneo",
  authors: [{ name: "Talpa Tunneling UPV" }],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "Talpa Tunneling UPV",
    description: "On the boring edge",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    images: [
      {
        url: "/eventos/IMG_3610.jpg",
        width: 1200,
        height: 630,
        alt: "Talpa Tunneling UPV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talpa Tunneling UPV",
    description: "On the boring edge",
    images: ["/eventos/IMG_3610.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning={true}>
      <body className="font-sans bg-black text-white antialiased">
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
