"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react"

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
    title: "Not-a-Boring Competition 2026",
    description: "¡El gran desafío! Talpa Tunneling UPV participará en la quinta edición de la Not-a-Boring Competition organizada por The Boring Company. Competiremos con nuestra tuneladora contra equipos de todo el mundo durante una semana de actividades para 'beat the snail' (superar al caracol). Una oportunidad única de demostrar nuestra innovación en tecnología de tunelización.",
    date: "2026-04-1",
    time: "09:00",
    location: "Bastrop, Texas, USA",
    type: "futuro",
    category: "Competición",
    image: "/placeholder-bg.svg",
    isOnline: false
  },
  {
    id: "2",
    title: "Evento de Networking - Día 2",
    description: "En Talpa Tunneling UPV, si hacemos algo, lo hacemos a lo grande. Nuestro evento tuvo que posponerse, pero eso solo significa una cosa: ¡volvemos con más fuerza y con el doble de oportunidades para conocernos! Ven, conócenos y descubre cómo puedes unirte a la revolución subterránea.",
    date: "2025-03-14",
    time: "12:30",
    location: "Planta baja del edificio 4H (Caminos 1), UPV",
    type: "pasado",
    category: "Networking",
    image: "/placeholder-bg.svg",
    isOnline: false
  },
  
  {
    id: "3",
    title: "Evento de Networking - Día 1 Tarde",
    description: "Segunda parte del primer día de nuestro evento de networking. Un espacio donde podrás conocer más sobre nuestro proyecto y las oportunidades de unirte al equipo.",
    date: "2025-03-13",
    time: "14:30 - 15:00",
    location: "Casa del Alumno, UPV",
    type: "pasado",
    category: "Networking",
    image: "/placeholder-bg.svg",
    isOnline: false
  },
  {
    id: "4",
    title: "Evento de Networking - Día 1 Mañana",
    description: "Primera parte de nuestro evento de networking donde podrás conocer más sobre Talpa Tunneling UPV, descubrir cómo puedes unirte y charlar con nuestro equipo. También contaremos con la presencia de cátedras, profesores y figuras clave de la universidad.",
    date: "2025-03-13",
    time: "11:30 - 14:30",
    location: "Ágora UPV",
    type: "pasado",
    category: "Networking",
    image: "/placeholder-bg.svg",
    isOnline: false
  },
  {
    id: "5",
    title: "Evento de Networking - Primera Convocatoria",
    description: "¿Te imaginas formar parte de un equipo que diseña y construye una tuneladora para competir en un desafío global? Este evento fue cancelado por causas mayores, pero se reprogramó para marzo con el doble de oportunidades.",
    date: "2025-03-06",
    time: "12:30 - 14:00",
    location: "Planta baja del edificio 4H (Caminos 1), UPV",
    type: "pasado",
    category: "Networking",
    image: "/placeholder-bg.svg",
    isOnline: false
  },
  {
    id: "6",
    title: "Incorporación a Generación Espontánea",
    description: "¡Talpa Tunneling UPV ya forma parte de Generación Espontánea UPV! Hoy celebramos un paso gigante en nuestro camino. Hemos sido reconocidos oficialmente como parte de Generación Espontánea UPV, el programa que impulsa a los equipos más innovadores y emprendedores de la UPV.",
    date: "2024-12-01",
    time: "10:00",
    location: "Universitat Politècnica de València (UPV)",
    type: "pasado",
    category: "Reconocimiento",
    image: "/placeholder-bg.svg",
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
      case "Reconocimiento":
        return "bg-green-500/20 text-green-400 border-green-500/30"
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
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