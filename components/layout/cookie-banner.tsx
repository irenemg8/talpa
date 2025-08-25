"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Cookie, Settings, Shield, BarChart3, X } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre activas
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const cookieConsent = localStorage.getItem('talpa-cookie-consent')
    if (!cookieConsent) {
      // Mostrar el banner después de un pequeño delay para mejor UX
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    } else {
      // Cargar preferencias guardadas
      try {
        const savedPreferences = JSON.parse(cookieConsent)
        setPreferences(savedPreferences)
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(newPreferences)
  }

  const handleAcceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    savePreferences(newPreferences)
  }

  const handleSaveCustom = () => {
    savePreferences(preferences)
    setShowSettings(false)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('talpa-cookie-consent', JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    
    // Aquí podrías inicializar las herramientas de analytics/marketing según las preferencias
    if (prefs.analytics) {
      // Inicializar Google Analytics, etc.
      console.log('Analytics cookies enabled')
    }
    if (prefs.marketing) {
      // Inicializar herramientas de marketing
      console.log('Marketing cookies enabled')
    }
  }

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return // Las cookies necesarias no se pueden desactivar
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Banner principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-black/95 backdrop-blur-sm border-t border-white/10">
        <Card className="glass-card border-white/20 max-w-6xl mx-auto">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 sm:gap-6">
              {/* Icono y contenido */}
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2 rounded-lg bg-[#00338d]/20 flex-shrink-0">
                  <Cookie className="h-6 w-6 text-[#00338d]" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-overpass font-semibold text-base sm:text-lg">🍪 Configuración de Cookies</h3>
                    <Badge variant="secondary" className="bg-[#00338d]/20 text-[#00338d] text-xs w-fit">
                      RGPD
                    </Badge>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    Utilizamos cookies para mejorar tu experiencia de navegación, analizar el uso del sitio web 
                    y ayudar en nuestros esfuerzos de marketing. Al hacer clic en "Aceptar todas", consientes 
                    el uso de TODAS las cookies. También puedes gestionar tus preferencias individualmente.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <Shield className="h-3 w-3 flex-shrink-0" />
                      <span>Tus datos están protegidos según nuestra</span>
                    </div>
                    <a 
                      href="/privacidad" 
                      className="text-[#00338d] hover:text-[#00338d]/80 underline transition-colors duration-200 ml-4 sm:ml-0"
                    >
                      Política de Privacidad
                    </a>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0 w-full sm:w-auto">
                <Dialog open={showSettings} onOpenChange={setShowSettings}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/30 hover:bg-white/10 text-white/90 transition-all duration-200 hover:border-white/50 hover:scale-105 active:scale-95 min-h-[40px] flex-1 sm:flex-none sm:min-w-[120px]"
                    >
                      <Settings className="h-4 w-4 mr-2 transition-transform hover:rotate-45" />
                      <span className="font-medium">Personalizar</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-card border-white/20 max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Cookie className="h-5 w-5 text-[#00338d]" />
                        Configuración de Cookies
                      </DialogTitle>
                      <DialogDescription className="text-white/70">
                        Personaliza qué tipos de cookies quieres permitir. Las cookies necesarias 
                        siempre están activas para el funcionamiento básico del sitio.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                      {/* Cookies Necesarias */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-500/20">
                              <Shield className="h-4 w-4 text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold">Cookies Necesarias</h4>
                              <p className="text-sm text-white/70">Requeridas para el funcionamiento básico</p>
                            </div>
                          </div>
                          <Switch 
                            checked={preferences.necessary} 
                            disabled={true}
                            className="opacity-50"
                          />
                        </div>
                        <p className="text-xs text-white/60 ml-11">
                          Estas cookies son esenciales para que el sitio web funcione correctamente. 
                          Incluyen funciones como navegación básica, acceso a áreas seguras y preferencias de idioma.
                        </p>
                      </div>

                      {/* Cookies de Análisis */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                              <BarChart3 className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold">Cookies de Análisis</h4>
                              <p className="text-sm text-white/70">Nos ayudan a mejorar el sitio web</p>
                            </div>
                          </div>
                          <Switch 
                            checked={preferences.analytics} 
                            onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                          />
                        </div>
                        <p className="text-xs text-white/60 ml-11">
                          Estas cookies nos permiten contar visitas y fuentes de tráfico para medir y mejorar 
                          el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son más populares.
                        </p>
                      </div>

                      {/* Cookies de Marketing */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/20">
                              <Cookie className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold">Cookies de Marketing</h4>
                              <p className="text-sm text-white/70">Para contenido personalizado</p>
                            </div>
                          </div>
                          <Switch 
                            checked={preferences.marketing} 
                            onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                          />
                        </div>
                        <p className="text-xs text-white/60 ml-11">
                          Estas cookies pueden ser establecidas por nuestros socios publicitarios para 
                          crear un perfil de tus intereses y mostrarte anuncios relevantes.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                      <Button 
                        onClick={handleSaveCustom}
                        className="btn-primary flex-1 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/30 hover:border-white/50"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="h-4 w-4 transition-transform group-hover:rotate-12" />
                          <span className="font-semibold">Guardar Preferencias</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setShowSettings(false)}
                        className="border-white/30 hover:bg-white/10 transition-all duration-200 hover:border-white/50 sm:min-w-[100px]"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleAcceptNecessary}
                  className="border-white/30 hover:bg-white/10 text-white/90 transition-all duration-200 hover:border-white/50 hover:scale-105 active:scale-95 min-h-[40px] flex-1 sm:flex-none sm:min-w-[130px]"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="font-medium">Solo Necesarias</span>
                </Button>
                
                <Button 
                  onClick={handleAcceptAll}
                  size="sm"
                  className="btn-primary relative overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 min-h-[40px] flex-1 sm:flex-none sm:min-w-[130px] border border-white/30 hover:border-white/50"
                >
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <Cookie className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    <span className="font-semibold">Aceptar Todas</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overlay para mejor visibilidad */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-40" />
    </>
  )
}

// Hook para verificar el estado de las cookies
export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('talpa-cookie-consent')
    if (cookieConsent) {
      try {
        setPreferences(JSON.parse(cookieConsent))
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
  }, [])

  return preferences
}

// Componente para gestionar cookies desde la configuración
export function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem('talpa-cookie-consent')
    if (cookieConsent) {
      try {
        setPreferences(JSON.parse(cookieConsent))
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('talpa-cookie-consent', JSON.stringify(preferences))
    
    // Crear notificación visual moderna
    const notification = document.createElement('div')
    notification.className = 'fixed top-4 right-4 z-50 glass-card border-green-500/30 bg-green-500/10 text-green-100 p-4 rounded-lg shadow-lg transform translate-x-full transition-all duration-300'
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="font-medium">Preferencias guardadas correctamente</span>
      </div>
    `
    
    document.body.appendChild(notification)
    
    // Animación de entrada
    setTimeout(() => {
      notification.classList.remove('translate-x-full')
    }, 100)
    
    // Remover después de 3 segundos
    setTimeout(() => {
      notification.classList.add('translate-x-full')
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <Card className="glass-card border-white/10">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Cookie className="h-6 w-6 text-[#00338d]" />
          <div>
            <h3 className="font-overpass font-semibold text-xl">Configuración de Cookies</h3>
            <p className="text-white/70">Gestiona tus preferencias de cookies</p>
          </div>
        </div>

        {/* Mismas secciones que en el modal pero como componente independiente */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Shield className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Cookies Necesarias</h4>
                  <p className="text-sm text-white/70">Requeridas para el funcionamiento básico</p>
                </div>
              </div>
              <Switch checked={preferences.necessary} disabled={true} className="opacity-50" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <BarChart3 className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Cookies de Análisis</h4>
                  <p className="text-sm text-white/70">Nos ayudan a mejorar el sitio web</p>
                </div>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Cookie className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Cookies de Marketing</h4>
                  <p className="text-sm text-white/70">Para contenido personalizado</p>
                </div>
              </div>
              <Switch 
                checked={preferences.marketing} 
                onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
              />
            </div>
          </div>
        </div>

        <Button 
          onClick={handleSave} 
          className="btn-primary w-full relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-3 border border-white/30 hover:border-white/50"
        >
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 transition-transform group-hover:rotate-12" />
            <span className="font-semibold text-base">Guardar Preferencias</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Button>
      </CardContent>
    </Card>
  )
}
