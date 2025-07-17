"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ExternalLink, ArrowRight } from "lucide-react"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: "pasado" | "presente" | "futuro"
  category: string
  attendees?: number
  maxAttendees?: number
  image: string
  registrationUrl?: string
  isOnline?: boolean
}

const events: Event[] = [
  {
    id: "1",
    title: "Not a Boring Competition 2026 - Inscripción",
    description: "Evento principal donde presentaremos nuestra micro-tuneladora en la competición internacional organizada por The Boring Company.",
    date: "2026-06-15",
    time: "09:00",
    location: "Austin, Texas, USA",
    type: "futuro",
    category: "Competición",
    attendees: 1,
    maxAttendees: 15,
    image: "/placeholder.jpg",
    registrationUrl: "#",
    isOnline: false
  },
  {
    id: "2",
    title: "Jornada de Puertas Abiertas - Demostración de Tuneladora",
    description: "Presentación pública de nuestra micro-tuneladora en el campus de la UPV. Ven a conocer nuestro proyecto y al equipo.",
    date: "2025-03-20",
    time: "10:00",
    location: "Campus UPV, Valencia",
    type: "futuro",
    category: "Demostración",
    attendees: 45,
    maxAttendees: 100,
    image: "/placeholder.jpg",
    registrationUrl: "#",
    isOnline: false
  },
  {
    id: "3",
    title: "Webinar: Futuro de la Tunelización Urbana",
    description: "Charla online sobre las aplicaciones de micro-tuneladoras en infraestructuras urbanas y ciudades inteligentes.",
    date: "2025-02-14",
    time: "18:00",
    location: "Online",
    type: "futuro",
    category: "Conferencia",
    attendees: 120,
    maxAttendees: 200,
    image: "/placeholder.jpg",
    registrationUrl: "#",
    isOnline: true
  },
  {
    id: "4",
    title: "Sesión de Networking - Startups Tech Valencia",
    description: "Evento de networking con startups tecnológicas de Valencia. Oportunidad para establecer colaboraciones y partnerships.",
    date: "2025-01-25",
    time: "19:00",
    location: "Lanzadera, Valencia",
    type: "presente",
    category: "Networking",
    attendees: 80,
    maxAttendees: 120,
    image: "/placeholder.jpg",
    registrationUrl: "#",
    isOnline: false
  },
  {
    id: "5",
    title: "UPV-ISTOBAL Event Series V Edición",
    description: "Participación en el prestigioso evento UPV-ISTOBAL donde presentamos nuestros avances en tecnología de tunelización.",
    date: "2024-12-25",
    time: "09:00",
    location: "UPV Campus, Valencia",
    type: "pasado",
    category: "Conferencia",
    attendees: 150,
    maxAttendees: 150,
    image: "/placeholder.jpg",
    isOnline: false
  },
  {
    id: "6",
    title: "Generación Espontánea - Presentación de Proyectos",
    description: "Presentación oficial de Talpa Tunneling UPV como nuevo equipo de Generación Espontánea ante la comunidad universitaria.",
    date: "2024-11-10",
    time: "16:00",
    location: "Aula Magna UPV, Valencia",
    type: "pasado",
    category: "Presentación",
    attendees: 200,
    maxAttendees: 200,
    image: "/placeholder.jpg",
    isOnline: false
  },
  {
    id: "7",
    title: "Taller de Reclutamiento - Únete al Equipo",
    description: "Taller informativo para estudiantes interesados en unirse al equipo. Conoce nuestros subsistemas y oportunidades.",
    date: "2024-10-15",
    time: "17:00",
    location: "Escuela de Ingeniería, UPV",
    type: "pasado",
    category: "Taller",
    attendees: 85,
    maxAttendees: 100,
    image: "/placeholder.jpg",
    isOnline: false
  },
  {
    id: "8",
    title: "Fundación de Talpa Tunneling UPV",
    description: "Evento fundacional del equipo Talpa Tunneling UPV. Primer encuentro del equipo y definición de objetivos.",
    date: "2024-09-01",
    time: "10:00",
    location: "UPV Campus, Valencia",
    type: "pasado",
    category: "Fundación",
    attendees: 12,
    maxAttendees: 15,
    image: "/placeholder.jpg",
    isOnline: false
  }
]

export default function EventosPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getEventStatus = (type: string) => {
    switch (type) {
      case "futuro":
        return { color: "bg-green-500/20 text-green-400 border-green-500/30", label: "Próximo" }
      case "presente":
        return { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", label: "En Curso" }
      case "pasado":
        return { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", label: "Finalizado" }
      default:
        return { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", label: "Desconocido" }
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Competición":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Conferencia":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Demostración":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Networking":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30"
      case "Taller":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "Presentación":
        return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
      case "Fundación":
        return "bg-[#00338d]/20 text-[#00338d] border-[#00338d]/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const upcomingEvents = events.filter(event => event.type === "futuro")
  const currentEvents = events.filter(event => event.type === "presente")
  const pastEvents = events.filter(event => event.type === "pasado")

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Eventos</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubre todos los eventos pasados, presentes y futuros de Talpa Tunneling UPV. 
            Únete a nosotros en conferencias, talleres y demostraciones.
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="font-overpass text-3xl font-bold mb-8 text-center">Próximos Eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="glass-card border-white/10 hover:border-green-500/30 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className={getEventStatus(event.type).color}>
                        {getEventStatus(event.type).label}
                      </Badge>
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    {event.isOnline && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          Online
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-overpass text-xl font-bold mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      {event.attendees && event.maxAttendees && (
                        <div className="flex items-center text-white/60 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees}/{event.maxAttendees} inscritos
                        </div>
                      )}
                    </div>
                    
                    {event.registrationUrl && (
                      <Button className="w-full btn-primary">
                        Inscribirse
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Current Events */}
        {currentEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="font-overpass text-3xl font-bold mb-8 text-center">Eventos Actuales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentEvents.map((event) => (
                <Card key={event.id} className="glass-card border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className={getEventStatus(event.type).color}>
                        {getEventStatus(event.type).label}
                      </Badge>
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    {event.isOnline && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          Online
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-overpass text-xl font-bold mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      {event.attendees && event.maxAttendees && (
                        <div className="flex items-center text-white/60 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees}/{event.maxAttendees} inscritos
                        </div>
                      )}
                    </div>
                    
                    <Button className="w-full btn-secondary">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="font-overpass text-3xl font-bold mb-8 text-center">Eventos Pasados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden opacity-75">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover grayscale"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className={getEventStatus(event.type).color}>
                      {getEventStatus(event.type).label}
                    </Badge>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-overpass text-xl font-bold mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    {event.attendees && (
                      <div className="flex items-center text-white/60 text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} asistentes
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" className="w-full btn-secondary">
                    Ver Resumen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-overpass text-2xl font-bold mb-4">¿Quieres participar?</h2>
              <p className="text-white/80 mb-6">
                Únete a nuestros eventos y forma parte de la revolución en tecnología de tunelización. 
                Mantente informado sobre nuestras próximas actividades.
              </p>
              <Button asChild className="btn-primary">
                <a href="/unete">
                  Únete al Equipo
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 