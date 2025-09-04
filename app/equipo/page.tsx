"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function EquipoPage() {
  const { t } = useTranslation()
  
  // Mapeo de nombres a archivos de imagen en public/equipo
  const memberPhotos: { [key: string]: string } = {
    "Beatriz de Silva Espinar Hernández": "/equipo/IMG_0026 - Beatriz De Silva Espinar Hernández.jpg",
    "Francisco Soler Bejarano": "/equipo/Imagen de WhatsApp 2025-08-28 a las 20.07.52_d23b07ff - Paco Soler Bejarano.jpg",
    "Mario Sanchis Tormo": "/equipo/IMG_5680-Mario-Sanchis-Tormo.jpg",
    "Gonzalo Sáez Pardo": "/equipo/hhjl - gonzalo saez.jpg",
    "David Ramón Alamán": "/equipo/IMG-20250826-WA0007 - David Ramón Alamán.jpg",
    "Joan Palomares Solanes": "/equipo/foto_perfil_talpa_joan - Joan Palomares.jpg",
    "Carlos Torregrosa Marti": "/equipo/1000021597 - Carlos Torregrosa marti.jpeg",
    "Radu Andres Ruja Maier": "/equipo/IMG_8634 - RADU ANDRES RUJA MAIER.jpeg",
    "Ariadna Tejedor Sotos": "/equipo/20250804_205424 - Ariadna.jpg",
    "Rosario Pérez Morte": "/equipo/foto - Rosario Pérez.jpg",
    "Manel Bonet García": "/equipo/IMG_20250825_230207 - Maneloozk h.jpg",
    "Gloria Galindo Ureña": "/equipo/20250827_163543 - Gloria.jpg",
    "Alejandro Clemente Agulló": "/equipo/Alejandro Clemente - Alejandro Clemente Agulló.jpg",
    "Àlvar Sánchez Heinen": "/equipo/Foto talpa horizontal  - Alvar Sánchez Heinen.jpg",
    "Pablo Llácer Torrijo": "/equipo/IMG-20250518-WA0008 - Pablo Llácer Torrijo.jpg",
    "Enric Solano Peris": "/equipo/ee18b18e-2b78-47a9-949d-6aacd670cc5b - Quique Solano.jpg",
    "Luis Roger Morro": "/equipo/IMG_3769 - Luis Roger Morro.jpeg",
    "Javier Abío Buendía": "/equipo/IMG_9688 - Javier Abio Buendia.jpeg",
    "JingJie Yang": "/equipo/Foto Linkedin - Jingjie Yang.jpg",
    "Darlyn Paulina Barrios": "/equipo/IMG_0648 - Paulina B.jpeg",
    "Iker Sampedro Sánchez": "/equipo/Iker.jpg",
    "Irene Medina García": "/equipo/IMG_8074-Irene.jpg",
  }

  const teamMembers = [
    // Dirección
    {
      name: "Beatriz de Silva Espinar Hernández",
      role: t("team.capitana"),
      subsystem: t("team.direccion"),
      degree: t("team.masterCaminos"),
      skills: [t("team.liderazgo"), t("team.gestion"), t("team.planificacion")],
      bio: t("team.capitanaBio"),
      image: memberPhotos["Beatriz de Silva Espinar Hernández"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/beatriz-de-silva-espinar-hernández",
    },
    {
      name: "Francisco Soler Bejarano",
      role: t("team.directorTecnico"),
      subsystem: t("team.direccion"),
      degree: t("team.masterCaminos"),
      skills: [t("team.ingenieria"), t("team.direccionHabilidad"), t("team.innovacion")],
      bio: t("team.directorTecnicoBio"),
      image: memberPhotos["Francisco Soler Bejarano"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/francisco-soler-bejarano-495877331",
    },
    {
      name: "Mario Sanchis Tormo",
      role: t("team.directorOperaciones"),
      subsystem: t("team.direccion"),
      degree: t("team.gradoDisenoIndustrial"),
      skills: [t("team.operaciones"), t("team.diseno"), t("team.gestion")],
      bio: t("team.directorOperacionesBio"),
      image: memberPhotos["Mario Sanchis Tormo"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/mariosanchistormo",
    },
    // Control
    {
      name: "Iker Sampedro Sánchez",
      role: t("team.pmFirmware"),
      subsystem: t("team.control"),
      degree: t("team.masterInformatica"),
      skills: [t("team.firmware"), t("team.programacion"), t("team.sistemas")],
      bio: t("team.pmFirmwareBio"),
      image: memberPhotos["Iker Sampedro Sánchez"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/iker-sampedro-sanchez",
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
      image: memberPhotos["Gonzalo Sáez Pardo"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/gonzalo-sáez-pardo",
      github: "https://github.com/gonse",
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
      image: memberPhotos["Irene Medina García"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/irene-medina-garc%C3%ADa-8ba621271/",
      github: "https://github.com/irenemg8",
    },
    {
      name: "Darlyn Paulina Barrios",
      role: "Ingeniera de Firmware",
      subsystem: "Control",
      degree: "Grado en Ingeniería Informática",
      skills: ["Firmware", "Programación", "Sistemas"],
      bio: "Desarrolladora de firmware y sistemas embebidos.",
      image: memberPhotos["Darlyn Paulina Barrios"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/darlynpaulina",
      github: "https://github.com/darlynpaulina",
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
      image: memberPhotos["David Ramón Alamán"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/davidramonalaman",
      github: "https://github.com/David-R-A",
    },
    {
      name: "Joan Palomares Solanes",
      role: "Ingeniero de Automation",
      subsystem: "Control",
      degree: "Ingeniero Informático",
      skills: ["Automatización", "Software", "Sistemas"],
      bio: "Ingeniero especializado en sistemas de automatización.",
      image: memberPhotos["Joan Palomares Solanes"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/joan-palomares-solanes-282217244",
      github: "https://github.com/jopaso",
    },
    // Mechanics
    {
      name: "Carlos Torregrosa Marti",
      role: "PM Propulsion",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Propulsión", "Mecánica", "Diseño"],
      bio: "Project Manager del subsistema de propulsión.",
      image: memberPhotos["Carlos Torregrosa Marti"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/carlostorregrosamarti",
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
      image: memberPhotos["Radu Andres Ruja Maier"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://es.linkedin.com/in/radu-andres-ruja-maier-4b72bb360",
    },
    {
      name: "Ariadna Tejedor Sotos",
      role: "Ingeniera de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Propulsión", "Mecánica", "Diseño"],
      bio: "Ingeniera especializada en sistemas de propulsión.",
      image: memberPhotos["Ariadna Tejedor Sotos"] || "/placeholder.svg?height=200&width=200",
      linkedin: "http://www.linkedin.com/in/ariadna-tejedor-sotos-84374835a",
    },
    {
      name: "Rosario Pérez Morte",
      role: "Ingeniera de Diseño Estructural",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Estructuras", "Materiales", "Análisis"],
      bio: "Especialista en diseño estructural y materiales.",
      image: memberPhotos["Rosario Pérez Morte"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/rosario-pérez-3506b1299",
    },
    {
      name: "Manel Bonet García",
      role: "Ingeniero de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Propulsión", "Energía", "Sistemas"],
      bio: "Ingeniero especializado en sistemas de propulsión.",
      image: memberPhotos["Manel Bonet García"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/manel-bonet-80a728242",
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
      image: memberPhotos["Gloria Galindo Ureña"] || "/placeholder.svg?height=200&width=200",
      linkedin: "http://www.linkedin.com/in/gloria-galindo-ure%C3%B1a-2bb82235b",
    },
    {
      name: "Alejandro Clemente Agulló",
      role: "Ingeniero de Corte y Excavación",
      subsystem: "Mechanics",
      degree: "Máster en Ingeniería Industrial",
      skills: ["Excavación", "Industrial", "Optimización"],
      bio: "Especialista en procesos industriales de excavación.",
      image: memberPhotos["Alejandro Clemente Agulló"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/alejandro-clemente-agulló",
    },
    {
      name: "Àlvar Sánchez Heinen",
      role: "Ingeniero de Diseño Estructural",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería en Tecnologías Industriales",
      skills: ["Estructuras", "Diseño", "Innovación"],
      bio: "Especialista en diseño estructural innovador.",
      image: memberPhotos["Àlvar Sánchez Heinen"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/alvarsanchez",
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
      image: memberPhotos["Pablo Llácer Torrijo"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/pablo-llácer-torrijo-9a831b1a8",
    },
    {
      name: "Enric Solano Peris",
      role: "Ingeniero de Propulsión",
      subsystem: "Mechanics",
      degree: "Grado en Ingeniería Mecánica",
      skills: ["Propulsión", "Mecánica", "Sistemas"],
      bio: "Ingeniero mecánico especializado en propulsión.",
      image: memberPhotos["Enric Solano Peris"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/quique-solano-peris",
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
      image: memberPhotos["Luis Roger Morro"] || "/placeholder.svg?height=200&width=200",
      linkedin: "http://linkedin.com/in/luis-roger-morro-a07b51237",
    },
    {
      name: "Javier Abío Buendía",
      role: "PM Terrenos",
      subsystem: "Terrenos",
      degree: "Máster en Ingeniería de Caminos, Canales y Puertos",
      skills: ["Geotecnia", "Caminos", "Gestión"],
      bio: "Project Manager del subsistema de terrenos.",
      image: memberPhotos["Javier Abío Buendía"] || "/placeholder.svg?height=200&width=200",
      linkedin: "http://linkedin.com/in/javier-abío-buendía-42151a271",
    },
    // Operaciones
    {
      name: "Catherine Stephanie Velez de Villa Robles",
      role: "Agente de Partners",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería Geomática y Topografía",
      skills: ["Partners", "Geomática", "Relaciones"],
      bio: "Especialista en relaciones con partners y geomática.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sergio Paniagua Sansegundo",
      role: "Agente de Marketing",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería en Diseño Industrial y Desarrollo del Producto",
      skills: ["Marketing", "Diseño", "Comunicación"],
      bio: "Especialista en marketing y comunicación visual.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "JingJie Yang",
      role: "Agente de Partners",
      subsystem: "Operaciones",
      degree: "Grado en Ingeniería de la Energía",
      skills: ["Partners", "Energía", "Relaciones"],
      bio: "Especialista en relaciones con partners y sistemas energéticos.",
      image: memberPhotos["JingJie Yang"] || "/placeholder.svg?height=200&width=200",
      linkedin: "https://www.linkedin.com/in/jingjie-yang-upv",
    },
    {
      name: "Carme Baixauli",
      role: "Agente de Marketing",
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
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("team.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        {/* Estadísticas del equipo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">30+</div>
            <div className="text-white/70">{t("stats.members")}</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">9</div>
            <div className="text-white/70">{t("stats.subsystems")}</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">15+</div>
            <div className="text-white/70">{t("stats.degrees")}</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[#00338d] mb-2">2025</div>
            <div className="text-white/70">{t("stats.competition")}</div>
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
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        // Fallback para imágenes HEIF o que no se puedan cargar
                        const target = e.target as HTMLImageElement
                        if (target.src.includes('.heif') || target.src.includes('.heic')) {
                          target.src = "/placeholder.svg"
                        }
                      }}
                    />
                  </div>
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
                    {member.linkedin && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="p-2 hover:bg-white/10"
                        asChild
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.github && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="p-2 hover:bg-white/10"
                        asChild
                      >
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para unirse */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="font-overpass text-2xl font-bold mb-4">{t("team.joinCta")}</h2>
            <p className="text-white/80 mb-6">
              {t("team.joinDescription")}
            </p>
            <Button asChild className="btn-primary">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">{t("team.joinButton")}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
