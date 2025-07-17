import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Award } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Misión Clara",
      description: "Desarrollar la tuneladora más eficiente para la Not a Boring Competition 2025.",
    },
    {
      icon: Users,
      title: "Equipo Multidisciplinar",
      description: "Estudiantes de diferentes ingenierías trabajando juntos hacia un objetivo común.",
    },
    {
      icon: Zap,
      title: "Innovación Constante",
      description: "Aplicamos las últimas tecnologías en automatización, diseño y construcción.",
    },
    {
      icon: Award,
      title: "Excelencia Académica",
      description: "Respaldados por la Universidad Politécnica de Valencia y Generación Espontánea.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-overpass text-3xl sm:text-4xl font-bold mb-6">Innovación Subterránea desde Valencia</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Somos un equipo de estudiantes apasionados por la ingeniería, unidos por el desafío de crear la próxima
            generación de tecnología de tunelización.
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
