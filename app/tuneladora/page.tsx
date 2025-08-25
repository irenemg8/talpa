"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RotateCcw, ZoomIn, ZoomOut, Download, Play, Pause, FileText, Globe } from "lucide-react"
import { getPdfPath } from "@/lib/assets"
import { useTranslation } from "@/hooks/use-translation"

export default function TuneladoraPage() {
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRotating, setIsRotating] = useState(true)
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const rotationRef = useRef(0)

  // Sincronizar rotation ref con state
  useEffect(() => {
    rotationRef.current = rotation
  }, [rotation])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.scale(zoom, zoom)
      ctx.rotate(rotationRef.current)

      // Cuerpo principal de la tuneladora
      ctx.fillStyle = "#00338d"
      ctx.fillRect(-100, -30, 200, 60)

      // Cabezal cortador
      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(100, 0, 35, 0, Math.PI * 2)
      ctx.fill()

      // Detalles del cabezal
      ctx.fillStyle = "#00338d"
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8
        const x = 100 + Math.cos(angle) * 20
        const y = Math.sin(angle) * 20
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Sistema de propulsión
      ctx.fillStyle = "#666666"
      ctx.fillRect(-120, -15, 20, 30)
      ctx.fillRect(-120, -35, 15, 15)
      ctx.fillRect(-120, 20, 15, 15)

      // Sistemas eléctricos
      ctx.fillStyle = "#ffff00"
      ctx.fillRect(-80, -40, 160, 10)
      ctx.fillRect(-80, 30, 160, 10)

      // Sensores
      ctx.fillStyle = "#ff0000"
      ctx.beginPath()
      ctx.arc(-90, -20, 3, 0, Math.PI * 2)
      ctx.arc(-90, 0, 3, 0, Math.PI * 2)
      ctx.arc(-90, 20, 3, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      if (isRotating) {
        rotationRef.current += 0.01
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [zoom, isRotating]) // Removed rotation from dependencies

  const specs = [
    { label: t("tunneler.diameter"), value: "1.2 m", icon: "📏" },
    { label: t("tunneler.material"), value: "Acero S275", icon: "⚙️" },
    { label: t("tunneler.torque"), value: "10 kN·m", icon: "🔧" },
    { label: t("tunneler.speed"), value: "18 m/h", icon: "🚀" },
    { label: t("tunneler.power"), value: "100 kW", icon: "⚡" },
    { label: t("tunneler.motor"), value: "136 CV", icon: "🔋" },
  ]

  const components = [
    {
      name: t("tunneler.cuttingHead"),
      description: t("tunneler.cuttingHeadDesc"),
      subsystem: t("tunneler.cuttingExcavation"),
      status: t("tunneler.enDesarrollo"),
    },
    {
      name: t("tunneler.propulsionSystem"),
      description: t("tunneler.propulsionSystemDesc"),
      subsystem: t("tunneler.propulsionTitle"),
      status: t("tunneler.prototipo"),
    },
    {
      name: t("tunneler.structuralChassis"),
      description: t("tunneler.structuralChassisDesc"),
      subsystem: t("tunneler.structuralDesign"),
      status: t("tunneler.disenoFinal"),
    },
    {
      name: t("tunneler.evacuationSystem"),
      description: t("tunneler.evacuationSystemDesc"),
      subsystem: t("tunneler.materialHandlingTitle"),
      status: t("tunneler.enDesarrollo"),
    },
    {
      name: t("tunneler.controlSystem"),
      description: t("tunneler.controlSystemDesc"),
      subsystem: t("tunneler.automationTitle"),
      status: t("tunneler.investigacion"),
    },
    {
      name: t("tunneler.electricalFeeding"),
      description: t("tunneler.electricalFeedingDesc"),
      subsystem: t("tunneler.electricalSystems"),
      status: t("tunneler.prototipo"),
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("tunneler.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {t("tunneler.description")}
          </p>
          
          {/* Botones de descarga */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              asChild 
              className="btn-primary relative overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30 hover:border-white/50"
            >
              <a 
                href={getPdfPath("Dossier Talpa Tunneling UPV_2025-Español.pdf")}
                download="Dossier_Talpa_Tunneling_UPV_2025_Español.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <FileText className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="font-semibold">Dossier Español</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-white/30 hover:bg-white/10 text-white/90 transition-all duration-200 hover:border-white/50 hover:scale-105 active:scale-95"
            >
              <a 
                href={getPdfPath("Dossier Talpa Tunneling UPV_2025 - Inglés.pdf")}
                download="Dossier_Talpa_Tunneling_UPV_2025_English.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4 mr-2 transition-transform hover:rotate-12" />
                <span className="font-medium">English Dossier</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Modelo 3D Interactivo */}
          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl flex items-center justify-between">
                  {t("tunneler.interactiveModel")}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" onClick={() => setIsRotating(!isRotating)} className="p-2">
                      {isRotating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => {
                      setRotation(0)
                      rotationRef.current = 0
                    }} className="p-2">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-80 rounded-lg cursor-grab active:cursor-grabbing"
                    style={{ background: "radial-gradient(circle, rgba(0,51,141,0.1) 0%, transparent 70%)" }}
                    onMouseDown={(e) => {
                      const startX = e.clientX
                      const startRotation = rotationRef.current

                      const handleMouseMove = (e: MouseEvent) => {
                        const deltaX = e.clientX - startX
                        const newRotation = startRotation + deltaX * 0.01
                        rotationRef.current = newRotation
                        setRotation(newRotation)
                        setIsRotating(false)
                      }

                      const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove)
                        document.removeEventListener("mouseup", handleMouseUp)
                      }

                      document.addEventListener("mousemove", handleMouseMove)
                      document.addEventListener("mouseup", handleMouseUp)
                    }}
                  />

                  {/* Controles de zoom */}
                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setZoom((prev) => Math.min(prev + 0.2, 3))}
                      className="p-2 bg-black/50"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setZoom((prev) => Math.max(prev - 0.2, 0.5))}
                      className="p-2 bg-black/50"
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-center text-white/70 mt-4 text-sm">
                  {t("tunneler.modelInstructions")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Especificaciones Técnicas */}
          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">{t("tunneler.specifications")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                      <span className="text-2xl">{spec.icon}</span>
                      <div>
                        <div className="font-semibold text-white">{spec.value}</div>
                        <div className="text-white/70 text-sm">{spec.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">{t("tunneler.features")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.optimizedDiameter")}</h4>
                    <p className="text-white/70 text-sm">
                      {t("tunneler.optimizedDiameterDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.electricPropulsion")}</h4>
                    <p className="text-white/70 text-sm">{t("tunneler.electricPropulsionDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.automatedControl")}</h4>
                    <p className="text-white/70 text-sm">{t("tunneler.automatedControlDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.robustStructure")}</h4>
                    <p className="text-white/70 text-sm">
                      {t("tunneler.robustStructureDesc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs con información detallada */}
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10">
            <TabsTrigger value="components">{t("tunneler.components")}</TabsTrigger>
            <TabsTrigger value="process">{t("tunneler.process")}</TabsTrigger>
            <TabsTrigger value="innovation">{t("tunneler.innovation")}</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <Card
                  key={index}
                  className="glass-card border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-overpass font-semibold text-lg">{component.name}</h3>
                      <Badge
                        variant={component.status === t("tunneler.disenoFinal") ? "default" : "secondary"}
                        className={`text-xs ${
                          component.status === t("tunneler.disenoFinal")
                            ? "bg-green-500/20 text-green-400"
                            : component.status === t("tunneler.prototipo")
                              ? "bg-yellow-500/20 text-yellow-400"
                              : component.status === t("tunneler.enDesarrollo")
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {component.status}
                      </Badge>
                    </div>

                    <p className="text-white/80 text-sm mb-4">{component.description}</p>

                    <Badge variant="outline" className="text-xs border-[#00338d]/50 text-[#00338d]">
                      {component.subsystem}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <Card className="glass-card border-white/10">
              <CardContent className="p-8">
                <h3 className="font-overpass text-2xl font-bold mb-6">{t("tunneler.procesoExcavacion")}</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.preparacionTerreno")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.preparacionTerrenoDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.posicionamientoArranque")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.posicionamientoArranqueDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.corteExcavacion")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.corteExcavacionDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.gestionMateriales")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.gestionMaterialesDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.controlMonitorizacion")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.controlMonitorizacionDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="innovation" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-overpass text-xl">{t("tunneler.innovacionesTecnologicas")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">{t("tunneler.navegacionAutonoma")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.navegacionAutonomaDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">{t("tunneler.disenoModular")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.disenoModularDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">{t("tunneler.controlRemotoAvanzado")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.controlRemotoAvanzadoDesc")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-overpass text-xl">{t("tunneler.ventajasCompetitivas")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">{t("tunneler.eficienciaEnergetica")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.eficienciaEnergeticaDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">{t("tunneler.evacuacionNeumatica")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.evacuacionNeumaticaDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">{t("tunneler.compactoVersatil")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.compactoVersatilDesc")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card border-white/10 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-overpass text-2xl font-bold mb-4">{t("tunneler.wantToKnowMore")}</h2>
              <p className="text-white/80 mb-6">
                {t("tunneler.downloadDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="btn-primary relative overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30 hover:border-white/50"
                >
                  <a 
                    href={getPdfPath("Dossier Talpa Tunneling UPV_2025-Español.pdf")}
                    download="Dossier_Talpa_Tunneling_UPV_2025_Español.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center gap-2 relative z-10">
                      <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span className="font-semibold">{t("tunneler.downloadDossier")}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
                    <span className="font-medium">{t("tunneler.joinProject")}</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
