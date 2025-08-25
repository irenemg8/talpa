import { CookieSettings } from "@/components/layout/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cookie, Shield, BarChart3, Info, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#00338d]/20 border border-[#00338d]/30">
              <Cookie className="h-12 w-12 text-[#00338d]" />
            </div>
          </div>
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Configuración de Cookies</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Gestiona tus preferencias de cookies y aprende sobre cómo utilizamos las cookies en nuestro sitio web.
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/10 text-white/80">
              Cumplimiento RGPD
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Navegación */}
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" size="sm" className="border-white/30 hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          {/* Información sobre cookies */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Info className="h-5 w-5 text-[#00338d]" />
                </div>
                ¿Qué son las cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
                un sitio web. Nos ayudan a mejorar tu experiencia de navegación, recordar tus preferencias 
                y proporcionarte contenido relevante.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <h4 className="font-semibold text-green-200">Necesarias</h4>
                  </div>
                  <p className="text-green-100/80 text-sm">
                    Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                    <h4 className="font-semibold text-blue-200">Análisis</h4>
                  </div>
                  <p className="text-blue-100/80 text-sm">
                    Nos ayudan a entender cómo interactúas con nuestro sitio web para mejorarlo.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Cookie className="h-4 w-4 text-purple-400" />
                    <h4 className="font-semibold text-purple-200">Marketing</h4>
                  </div>
                  <p className="text-purple-100/80 text-sm">
                    Utilizadas para mostrarte contenido y anuncios personalizados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuración de cookies */}
          <CookieSettings />

          {/* Información adicional */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Información Adicional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Cookies de Terceros</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Algunos de nuestros servicios pueden utilizar cookies de terceros:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Google Analytics (si está habilitado)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Redes sociales (Instagram, LinkedIn)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Servicios de mapas y formularios
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Gestión en tu Navegador</h4>
                  <p className="text-white/80 text-sm mb-4">
                    También puedes gestionar las cookies directamente desde tu navegador:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Bloquear todas las cookies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Eliminar cookies existentes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Configurar notificaciones
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-200 mb-2">Nota Importante</h4>
                    <p className="text-amber-100/80 text-sm">
                      Si desactivas las cookies necesarias, algunas funciones del sitio web pueden no 
                      funcionar correctamente. Las cookies de análisis y marketing son opcionales y 
                      no afectan la funcionalidad básica.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enlaces relacionados */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Más Información</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10">
                  <Link href="/privacidad">
                    <Shield className="h-4 w-4 mr-2" />
                    Política de Privacidad
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10">
                  <Link href="/terminos">
                    <Cookie className="h-4 w-4 mr-2" />
                    Términos y Condiciones
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10">
                  <Link href="/contacto">
                    <Info className="h-4 w-4 mr-2" />
                    Contacto
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
