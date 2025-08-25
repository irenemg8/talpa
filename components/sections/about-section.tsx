"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Award } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function AboutSection() {
  const { t } = useTranslation()
  const features = [
    {
      icon: Target,
      title: t("about.features.innovation.title"),
      description: t("about.features.innovation.description"),
    },
    {
      icon: Users,
      title: t("about.features.team.title"),
      description: t("about.features.team.description"),
    },
    {
      icon: Zap,
      title: t("about.features.competition.title"),
      description: t("about.features.competition.description"),
    },
    {
      icon: Award,
      title: t("about.features.sustainability.title"),
      description: t("about.features.sustainability.description"),
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-overpass text-3xl sm:text-4xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card border-white/10 hover:border-[#00338d]/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#00338d]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00338d]/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-[#00338d]" />
                </div>
                <h3 className="font-overpass font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
