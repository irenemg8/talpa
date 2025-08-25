import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

export default function EquipoPage() {
  const teamMembers = [
    // Dirección
    {
      name: "Beatriz de Silva Espinar Hernández",
      role: "Capitana",
      subsystem: "Dirección",
      degree: "Máster en Ingeniería de Caminos, Canales y Puertos",
      skills: ["Liderazgo", "Gestión", "Planificación"],
      bio: "Capitana del equipo, lidera la visión estratégica del proyecto.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Francisco Soler Bejarano",
      role: "Director Técnico",
      subsystem: "Dirección",
      degree: "Máster en Ingeniería de Caminos, Canales y Puertos",
      skills: ["Ingeniería", "Dirección", "Innovación"],
      bio: "Director técnico responsable del desarrollo tecnológico.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Mario Sanchis Tormo",
      role: "Director de Operaciones",
      subsystem: "Dirección",
      degree: "Grado en Ingeniería en Diseño Industrial y Desarrollo del Producto",
      skills: ["Operaciones", "Diseño", "Gestión"],
      bio: "Director de operaciones, coordina la ejecución del proyecto.",
      image: "/placeholder.svg?height=200&width=200",
    },
    // Control
    {
      name: "Iker Sampedro Sánchez",
      role: "PM Firmware",
      subsystem: "Control",
      degree: "Máster en Ingeniería Informática",
      skills: ["Firmware", "Programación", "Sistemas"],
      bio: "Project Manager del subsistema de firmware y control.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Alexis Montalvo Callaú",
      role: "PM Automation",
      subsystem: "Control",
      degree: "Doble Grado en Ingeniería Informática y ADE",
      skills: ["Automatización", "IA", "Gestión"],
      bio: "Especialista en sistemas de automatización y control inteligente.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Gonzalo Sáez Pardo",
      role: "Ingeniero de Firmware",
      subsystem: "Control",
      degree: "Grado en Ingeniería de Telecomunicaciones",
      skills: ["Firmware", "Telecomunicaciones", "Embedded"],
      bio: "Desarrollador de firmware y sistemas de comunicación.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Vittoria Avril Girard Sojoguti",
      role: "Ingeniera de Automation",
      subsystem: "Control",
      degree: "Grado en Ingeniería Informática",
      skills: ["Automatización", "Software", "Robótica"],
      bio: "Especialista en sistemas automatizados y robótica.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Irene Medina García",
      role: "Ingeniera de Automation",
      subsystem: "Control",
      degree: "Grado en Tecnologías Interactivas",
      skills: ["UX/UI", "Interacción", "Automatización"],
      bio: "Experta en interfaces de usuario y tecnologías interactivas.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Darlyn Paulina Barrios",
      role: "Ingeniera de Firmware",
      subsystem: "Control",
      degree: "Grado en Ingeniería Informática",
      skills: ["Firmware", "Programación", "Sistemas"],
      bio: "Desarrolladora de firmware y sistemas embebidos.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Arnau Campubrí Tormos",
      role: "Ingeniero de Firmware",
      subsystem: "Control",
      degree: "Grado en Ingeniería Informática",
      skills: ["Firmware", "Embedded", "IoT"],
      bio: "Especialista en sistemas embebidos y IoT.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Ramón Alamán",
      role: "PM Hardware",
      subsystem: "Control",
      degree: "Máster en Sistemas Embebidos",
      skills: ["Hardware", "Embedded", "Electrónica"],
      bio: "Project Manager del subsistema de hardware.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Joan Palomares Solanes",
      role: "Ingeniero de Automation",
      subsystem: "Control",
      degree: "Ingeniero Informático",
      skills: ["Automatización", "Software", "Sistemas"],
      bio: "Ingeniero especializado en sistemas de automatización.",
      image: "/placeholder.svg?height=200&width=200",
    },
    // Mechanics
    {
      name: "Carlos Torregrosa Marti",
      role: "PM Propulsion",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Propulsión", "Mecánica", "Diseño"],
      bio: "Project Manager del subsistema de propulsión.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Josías Diego Ágreda Revilla",
      role: "Ingeniero de Corte y Excavación",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Excavación", "Corte", "Materiales"],
      bio: "Especialista en sistemas de corte y excavación.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Radu Andres Ruja Maier",
      role: "Ingeniero de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Propulsión", "Energía", "Mecánica"],
      bio: "Especialista en sistemas de propulsión y energía.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ariadna Tejedor Sotos",
      role: "Ingeniera de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Propulsión", "Mecánica", "Diseño"],
      bio: "Ingeniera especializada en sistemas de propulsión.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Daniel Sanchis Hernández",
      role: "Ingeniero de Diseño Estructural",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Estructuras", "CAD", "Simulación"],
      bio: "Especialista en diseño y análisis estructural.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Rosario Pérez Morte",
      role: "Ingeniera de Diseño Estructural",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Estructuras", "Materiales", "Análisis"],
      bio: "Especialista en diseño estructural y materiales.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Manel Bonet García",
      role: "Ingeniero de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Propulsión", "Energía", "Sistemas"],
      bio: "Ingeniero especializado en sistemas de propulsión.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ernesto Molina Cruz",
      role: "Ingeniero de Corte y Excavación",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Aeroespacial",
      skills: ["Excavación", "Aerodinámica", "Sistemas"],
      bio: "Especialista en sistemas de corte con background aeroespacial.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Gloria Galindo Ureña",
      role: "Ingeniera de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería de la Energía",
      skills: ["Energía", "Propulsión", "Eficiencia"],
      bio: "Especialista en sistemas energéticos y propulsión.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Alejandro Clemente Agulló",
      role: "Ingeniero de Corte y Excavación",
      subsystem: "Mechanics",
      degree: "Máster en Ingeniería Industrial",
      skills: ["Excavación", "Industrial", "Optimización"],
      bio: "Especialista en procesos industriales de excavación.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Àlvar Sánchez Heinen",
      role: "Ingeniero de Diseño Estructural",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Estructuras", "Diseño", "Innovación"],
      bio: "Especialista en diseño estructural innovador.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Diego Benitez Martin",
      role: "Ingeniero de Corte y Excavación",
      subsystem: "Mechanics",
      degree: "Máster en Ingeniería Industrial",
      skills: ["Excavación", "Procesos", "Optimización"],
      bio: "Experto en optimización de procesos de excavación.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Pablo Llácer Torrijo",
      role: "Ingeniero de Diseño Estructural",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Estructuras", "Mecánica", "CAD"],
      bio: "Especialista en diseño mecánico y estructural.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Enric Solano Peris",
      role: "Ingeniero de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Propulsión", "Mecánica", "Sistemas"],
      bio: "Ingeniero mecánico especializado en propulsión.",
      image: "/placeholder.svg?height=200&width=200",
    },
    // Terrenos
    {
      name: "Ignacio de Loyola García Sarrió",
      role: "Ingeniero de Terrenos",
      subsystem: "Terrenos",
      degree: "Grado en Ingeniería Civil",
      skills: ["Geotecnia", "Civil", "Terrenos"],
      bio: "Especialista en análisis geotécnico y terrenos.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Luis Roger Morro",
      role: "Ingeniero de Terrenos",
      subsystem: "Terrenos",
      degree: "Grado en Ingeniería Geomática y Topografía",
      skills: ["Topografía", "Geomática", "Cartografía"],
      bio: "Especialista en topografía y análisis geomático.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Javier Abío Buendía",
      role: "PM Terrenos",
      subsystem: "Terrenos",
      degree: "Máster en Ingeniería de Caminos, Canales y Puertos",
      skills: ["Geotecnia", "Caminos", "Gestión"],
      bio: "Project Manager del subsistema de terrenos.",
      image: "/placeholder.svg?height=200&width=200",
    },
    // Operaciones
    {
      name: "Catherine Stephanie Velez de Villa Robles",
      role: "Ingeniera de Partners",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería Geomática y Topografía",
      skills: ["Partners", "Geomática", "Relaciones"],
      bio: "Especialista en relaciones con partners y geomática.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sergio Paniagua Sansegundo",
      role: "Ingeniero de Marketing",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería en Diseño Industrial y Desarrollo del Producto",
      skills: ["Marketing", "Diseño", "Comunicación"],
      bio: "Especialista en marketing y comunicación visual.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "JingJie Yang",
      role: "Ingeniero de Partners",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería de la Energía",
      skills: ["Partners", "Energía", "Relaciones"],
      bio: "Especialista en relaciones con partners y sistemas energéticos.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Carme Baixauli",
      role: "Ingeniera de Marketing",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería en Diseño Industrial y Desarrollo del Producto",
      skills: ["Marketing", "Diseño", "Producto"],
      bio: "Especialista en marketing y desarrollo de producto.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const subsystemColors = {
    Dirección: "#00338D",
    Control: "#3B82F6", 
    Mechanics: "#F59E0B",
    Terrenos: "#10B981",
    Operaciones: "#EC4899",
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
            <div className="text-3xl font-bold text-[#00338d] mb-2">30+</div>
            <div className="text-white/70">Miembros</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">9</div>
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
                      {member.degree}
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
