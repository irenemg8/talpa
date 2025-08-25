"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Linkedin, Music } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function ContactoPage() {
  const { t } = useTranslation()
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
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("contact.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">{t("contact.getInTouch")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#00338d] mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80 text-sm">talpatunnelingupv@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#00338d] mt-0.5" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-white/80 text-sm">
                      Edificio 4Q (Talpa Tunneling UPV)<br />
                      Universidad Politécnica de Valencia<br />
                      Camino de Vera, s/n<br />
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
                      <p className="text-xs text-white/60">Talpa Tunneling UPV</p>
                      <p className="text-xs text-white/40">Actualizaciones profesionales</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40">124</p>
                      <p className="text-xs text-white/40">seguidores</p>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div 
                  className="group cursor-pointer bg-gradient-to-r from-pink-600/10 to-purple-500/10 hover:from-pink-600/20 hover:to-purple-500/20 border border-pink-500/20 hover:border-pink-500/40 rounded-lg p-4 transition-all duration-300"
                  onClick={() => window.open("https://instagram.com/talpatunnelingupv", "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all">
                      <Instagram className="h-5 w-5 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-pink-400 group-hover:text-pink-300">Instagram</h4>
                      <p className="text-xs text-white/60">@talpatunnelingupv</p>
                      <p className="text-xs text-white/40">Fotos y videos del proyecto</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40">295</p>
                      <p className="text-xs text-white/40">seguidores</p>
                    </div>
                  </div>
                </div>

                {/* TikTok */}
                <div 
                  className="group cursor-pointer bg-gradient-to-r from-black/20 to-pink-500/10 hover:from-black/30 hover:to-pink-500/20 border border-pink-500/20 hover:border-pink-500/40 rounded-lg p-4 transition-all duration-300"
                  onClick={() => window.open("https://tiktok.com/@talpatunnelingupv", "_blank")}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-black/30 to-pink-500/20 rounded-full flex items-center justify-center group-hover:from-black/40 group-hover:to-pink-500/30 transition-all">
                      <Music className="h-5 w-5 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-pink-400 group-hover:text-pink-300">TikTok</h4>
                      <p className="text-xs text-white/60">@talpatunnelingupv</p>
                      <p className="text-xs text-white/40">Videos del proyecto y equipo</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40">-</p>
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

          {/* Additional Information */}
          <div className="space-y-6">
            {/* Location Info */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">¿Dónde Estamos?</CardTitle>
                <p className="text-white/60 text-sm">Visítanos en nuestro campus</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Address Info */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#00338d] mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Edificio 4Q</p>
                    <div className="text-white/80 text-sm space-y-1 mt-1">
                      <p>Universidad Politécnica de Valencia</p>
                      <p>Camino de Vera, s/n</p>
                      <p>Algirós, 46022 Valencia, España</p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="bg-white/5 rounded-lg overflow-hidden h-[300px] lg:h-[520px] mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.4!2d-0.337435!3d39.481592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f1b3c2e4f8d%3A0x8b2b7b9b9b9b9b9b!2sUniversitat%20Polit%C3%A8cnica%20de%20Val%C3%A8ncia%2C%20Cam%C3%AD%20de%20Vera%2C%20s%2Fn%2C%20Algir%C3%B3s%2C%2046022%20Val%C3%A8ncia%2C%20Valencia!5e0!3m2!1ses!2ses!4v1703000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>

       
      </div>
    </div>
  )
} 