import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { SubsystemsSection } from "@/components/sections/subsystems-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <StatsSection />
      <SubsystemsSection />
      <CTASection />
    </main>
  )
}
