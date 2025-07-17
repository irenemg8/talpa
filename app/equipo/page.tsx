import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"
//Vitto
export default function EquipoPage() {
  const teamMembers = [
    {
      name: "Ana García",
      role: "Project Manager",
      subsystem: "Partners",
      degree: "Ing. Industrial",
      year: "4º",
      skills: ["Gestión", "Liderazgo", "Negociación"],
      bio: "Especializada en gestión de proyectos y relaciones empresariales.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Carlos Martín",
      role: "Lead Engineer",
      subsystem: "Diseño Estructural",
      degree: "Ing. Mecánica",
      year: "Máster",
      skills: ["CAD", "Simulación", "Materiales"],
      bio: "Experto en diseño mecánico y análisis estructural.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Laura Sánchez",
      role: "Tech Lead",
      subsystem: "Automatización",
      degree: "Ing. Informática",
      year: "3º",
      skills: ["Python", "IA", "Robótica"],
      bio: "Desarrolladora especializada en sistemas inteligentes.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Miguel Torres",
      role: "Marketing Director",
      subsystem: "Marketing",
      degree: "Diseño Industrial",
      year: "4º",
      skills: ["Diseño", "Branding", "RRSS"],
      bio: "Creativo enfocado en comunicación visual y estrategia digital.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Elena Ruiz",
      role: "Systems Engineer",
      subsystem: "Sistemas Eléctricos",
      degree: "Ing. Telecomunicaciones",
      year: "Máster",
      skills: ["Electrónica", "Embedded", "IoT"],
      bio: "Especialista en sistemas embebidos y comunicaciones.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David López",
      role: "Drilling Specialist",
      subsystem: "Corte y Excavación",
      degree: "Ing. Mecánica",
      year: "4º",
      skills: ["Perforación", "Materiales", "Optimización"],
      bio: "Experto en tecnologías de perforación y excavación.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const subsystemColors = {
    Partners: "#00338D",
    Marketing: "#3B82F6",
    "Diseño Estructural": "#F59E0B",
    Automatización: "#F97316",
    "Sistemas Eléctricos": "#EC4899",
    "Corte y Excavación": "#EF4444",
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Nuestro Equipo</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Conoce a los estudiantes que están revolucionando la tecnología de tunelización. Un equipo multidisciplinar
            unido por la pasión por la innovación.
          </p>
        </div>

        {/* Estadísticas del equipo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">50+</div>
            <div className="text-white/70">Miembros</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">10</div>
            <div className="text-white/70">Subsistemas</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">15+</div>
            <div className="text-white/70">Titulaciones</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">2025</div>
            <div className="text-white/70">Competición</div>
          </div>
        </div>

        {/* Grid de miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-card border-white/10 hover:border-white/30 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Imagen */}
                <div className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      className="text-xs"
                      style={{
                        backgroundColor: subsystemColors[member.subsystem as keyof typeof subsystemColors] + "20",
                        color: subsystemColors[member.subsystem as keyof typeof subsystemColors],
                        border: `1px solid ${subsystemColors[member.subsystem as keyof typeof subsystemColors]}30`,
                      }}
                    >
                      {member.subsystem}
                    </Badge>
                  </div>
                </div>

                {/* Información del miembro */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-overpass font-bold text-lg">{member.name}</h3>
                    <p className="text-[#00338d] font-semibold">{member.role}</p>
                    <p className="text-white/70 text-sm">
                      {member.degree} - {member.year}
                    </p>
                  </div>

                  <p className="text-white/80 text-sm">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-white/10 text-white/80">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Enlaces sociales */}
                  <div className="flex space-x-3 pt-2">
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para unirse */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="font-overpass text-2xl font-bold mb-4">¿Quieres formar parte del equipo?</h2>
            <p className="text-white/80 mb-6">
              Estamos buscando estudiantes apasionados por la innovación y los retos técnicos. Únete a nosotros y ayuda
              a construir el futuro del transporte subterráneo.
            </p>
            <Button asChild className="btn-primary">
              <a href="/unete">Únete a Talpa Tunneling UPV</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
