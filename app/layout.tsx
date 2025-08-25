import type React from "react"
import type { Metadata } from "next"
import { Overpass, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Talpa Tunneling UPV | Microtuneladora",
  description:
    "Equipo de generación espontánea desarrollando una microtuneladora para la Not a Boring Competition. Únete a la innovación subterránea.",
  keywords: "tuneladora, ingeniería, UPV, competición, innovación, transporte subterráneo",
  authors: [{ name: "Talpa Tunneling UPV" }],
  openGraph: {
    title: "Talpa Tunneling UPV",
    description: "Innovación subterránea desde la Universidad Politécnica de Valencia",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
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
      <body className={`${overpass.variable} ${inter.variable} font-sans bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
