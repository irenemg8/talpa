"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

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



export default function EventosPage() {
  const { t } = useTranslation()
  
  const events: Event[] = [
    {
      id: "1",
      title: t("events.event1Title"),
      description: t("events.event1Description"),
      date: "2026-04-1",
      time: "09:00",
      location: "Bastrop, Texas, USA",
      type: "futuro",
      category: t("events.competition"),
      image: "/placeholder-bg.svg",
      isOnline: false
    },
    {
      id: "2",
      title: t("events.event2Title"),
      description: t("events.event2Description"),
      date: "2025-03-14",
      time: "12:30",
      location: "Planta baja del edificio 4H (Caminos 1), UPV",
      type: "pasado",
      category: t("events.networking"),
      image: "/placeholder-bg.svg",
      isOnline: false
    },
    {
      id: "3",
      title: t("events.event3Title"),
      description: t("events.event3Description"),
      date: "2025-03-13",
      time: "14:30 - 15:00",
      location: "Casa del Alumno, UPV",
      type: "pasado",
      category: t("events.networking"),
      image: "/placeholder-bg.svg",
      isOnline: false
    },
    {
      id: "4",
      title: t("events.event4Title"),
      description: t("events.event4Description"),
      date: "2025-03-13",
      time: "11:30 - 14:30",
      location: "Ágora UPV",
      type: "pasado",
      category: t("events.networking"),
      image: "/placeholder-bg.svg",
      isOnline: false
    },
    {
      id: "5",
      title: t("events.event5Title"),
      description: t("events.event5Description"),
      date: "2025-03-06",
      time: "12:30 - 14:00",
      location: "Planta baja del edificio 4H (Caminos 1), UPV",
      type: "pasado",
      category: t("events.networking"),
      image: "/placeholder-bg.svg",
      isOnline: false
    },
    {
      id: "6",
      title: t("events.event6Title"),
      description: t("events.event6Description"),
      date: "2024-12-01",
      time: "10:00",
      location: "Universitat Politècnica de València (UPV)",
      type: "pasado",
      category: t("events.recognition"),
      image: "/placeholder-bg.svg",
      isOnline: false
    }
  ]
  
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
        return { color: "bg-green-500/20 text-green-400 border-green-500/30", label: t("events.proximo") }
      case "presente":
        return { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", label: t("events.enCurso") }
      case "pasado":
        return { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", label: t("events.finalizado") }
      default:
        return { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", label: t("events.desconocido") }
    }
  }

  const getCategoryColor = (category: string) => {
    // Usar las claves de traducción para comparar
    if (category === t("events.competition")) {
      return "bg-red-500/20 text-red-400 border-red-500/30"
    } else if (category === t("events.networking")) {
      return "bg-pink-500/20 text-pink-400 border-pink-500/30"
    } else if (category === t("events.recognition")) {
      return "bg-green-500/20 text-green-400 border-green-500/30"
    } else {
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
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("events.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("events.subtitle")}
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="font-overpass text-3xl font-bold mb-8 text-center">{t("events.proximosEventos")}</h2>
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
                          {t("events.online")}
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
                          {event.attendees}/{event.maxAttendees} {t("events.inscritos")}
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
            <h2 className="font-overpass text-3xl font-bold mb-8 text-center">{t("events.eventosActuales")}</h2>
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
                          {t("events.online")}
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
                          {event.attendees}/{event.maxAttendees} {t("events.inscritos")}
                        </div>
                      )}
                    </div>
                    
                    <Button className="w-full btn-secondary">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("events.verDetalles")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="font-overpass text-3xl font-bold mb-8 text-center">{t("events.eventosPasados")}</h2>
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
                        {event.attendees} {t("events.asistentes")}
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
              <h2 className="font-overpass text-2xl font-bold mb-4">{t("events.joinCta")}</h2>
              <p className="text-white/80 mb-6">
                {t("events.joinDescription")}
              </p>
              <Button asChild className="btn-primary">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
                  {t("events.joinButton")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 