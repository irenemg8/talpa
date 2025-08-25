"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    reason: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass-card border-green-500/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="font-overpass text-2xl font-bold mb-4">¡Mensaje Enviado!</h2>
                <p className="text-white/80 mb-6">
                  Gracias por contactar con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
                </p>
                <div className="flex space-x-4 justify-center">
                  <Button onClick={() => setIsSubmitted(false)} className="btn-primary">
                    Enviar Otro Mensaje
                  </Button>
                  <Button asChild variant="outline" className="btn-secondary">
                    <a href="/">Volver al Inicio</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta, sugerencia o quieres colaborar con nosotros? 
            No dudes en ponerte en contacto. Estaremos encantados de ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form 
          <div className="lg:col-span-2">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-2xl flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-[#00338d]" />
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white/5 border-white/20 mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu.email@upv.es"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/5 border-white/20 mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Teléfono (opcional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+34 600 000 000"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-white/5 border-white/20 mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="reason">Motivo del contacto *</Label>
                      <Select onValueChange={(value) => handleInputChange("reason", value)}>
                        <SelectTrigger className="bg-white/5 border-white/20 mt-2">
                          <SelectValue placeholder="Selecciona un motivo" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="unirse">Quiero unirme al equipo</SelectItem>
                          <SelectItem value="informacion">Solicitar información</SelectItem>
                          <SelectItem value="colaboracion">Propuesta de colaboración</SelectItem>
                          <SelectItem value="prensa">Consulta de prensa</SelectItem>
                          <SelectItem value="patrocinio">Oportunidad de patrocinio</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      placeholder="Resumen del mensaje"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="bg-white/5 border-white/20 mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-white/5 border-white/20 mt-2 min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-white text-black hover:bg-gray-100 border-2 border-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>*/}

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#00338d] mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80 text-sm">talpa.tunneling@upv.es</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[#00338d] mt-0.5" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-white/80 text-sm">+34 963 877 000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#00338d] mt-0.5" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-white/80 text-sm">
                      Universitat Politècnica de València<br />
                      Camí de Vera, s/n<br />
                      46022 Valencia, España
                    </p>
                  </div>
                </div>

               
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">Síguenos</CardTitle>
                <p className="text-white/60 text-sm">Mantente al día con nuestras últimas noticias</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* LinkedIn */}
                <div 
                  className="group cursor-pointer bg-gradient-to-r from-blue-600/10 to-blue-500/10 hover:from-blue-600/20 hover:to-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg p-4 transition-all duration-300"
                  onClick={() => window.open("https://linkedin.com/company/talpa-tunneling-upv", "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-400 group-hover:text-blue-300">LinkedIn</h4>
                      <p className="text-xs text-white/60">Actualizaciones profesionales</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40">1.2K</p>
                      <p className="text-xs text-white/40">seguidores</p>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div 
                  className="group cursor-pointer bg-gradient-to-r from-pink-600/10 to-purple-500/10 hover:from-pink-600/20 hover:to-purple-500/20 border border-pink-500/20 hover:border-pink-500/40 rounded-lg p-4 transition-all duration-300"
                  onClick={() => window.open("https://instagram.com/talpa.tunneling.upv", "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all">
                      <Instagram className="h-5 w-5 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-pink-400 group-hover:text-pink-300">Instagram</h4>
                      <p className="text-xs text-white/60">Fotos y videos del proyecto</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40">850</p>
                      <p className="text-xs text-white/40">seguidores</p>
                    </div>
                  </div>
                </div>

                {/* Twitter */}
                <div 
                  className="group cursor-pointer bg-gradient-to-r from-blue-400/10 to-cyan-500/10 hover:from-blue-400/20 hover:to-cyan-500/20 border border-blue-400/20 hover:border-blue-400/40 rounded-lg p-4 transition-all duration-300"
                  onClick={() => window.open("https://twitter.com/talpa_tunneling", "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                      <Twitter className="h-5 w-5 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-300 group-hover:text-blue-200">Twitter</h4>
                      <p className="text-xs text-white/60">Noticias y actualizaciones</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40">650</p>
                      <p className="text-xs text-white/40">seguidores</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-2 mt-4 border-t border-white/10">
                  <p className="text-xs text-white/60 text-center">
                    ¡Únete a nuestra comunidad y sigue nuestro progreso hacia la Not a Boring Competition 2026!
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="font-overpass text-2xl text-center">¿Dónde Estamos?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white/5 rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-[#00338d] mx-auto mb-4" />
                <h3 className="font-overpass text-xl font-bold mb-2">Universidad Politécnica de Valencia</h3>
                <p className="text-white/80 mb-4">
                  Nuestro equipo tiene su base en el campus de la UPV, donde desarrollamos la micro-tuneladora 
                  y realizamos todas las actividades del proyecto.
                </p>
                <p className="text-white/60 text-sm">
                  Camí de Vera, s/n - 46022 Valencia, España
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 