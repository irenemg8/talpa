"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RotateCcw, ZoomIn, ZoomOut, Download, Play, Pause } from "lucide-react"

export default function TuneladoraPage() {
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
    { label: "Diámetro", value: "1.2 m", icon: "📏" },
    { label: "Longitud", value: "3.5 m", icon: "📐" },
    { label: "Peso", value: "850 kg", icon: "⚖️" },
    { label: "Velocidad máx.", value: "15 m/h", icon: "🚀" },
    { label: "Potencia", value: "25 kW", icon: "⚡" },
    { label: "Autonomía", value: "8 horas", icon: "🔋" },
  ]

  const components = [
    {
      name: "Cabezal Cortador",
      description: "Sistema de corte rotativo con tecnología de diamante industrial",
      subsystem: "Corte y Excavación",
      status: "En desarrollo",
    },
    {
      name: "Sistema de Propulsión",
      description: "Motor eléctrico de alta eficiencia con control de velocidad variable",
      subsystem: "Propulsión",
      status: "Prototipo",
    },
    {
      name: "Chasis Principal",
      description: "Estructura de aleación ligera diseñada para máxima resistencia",
      subsystem: "Diseño Estructural",
      status: "Diseño final",
    },
    {
      name: "Sistema de Ventilación",
      description: "Evacuación de materiales y refrigeración del sistema",
      subsystem: "Ventilación",
      status: "En desarrollo",
    },
    {
      name: "Control Inteligente",
      description: "IA para navegación autónoma y optimización de rutas",
      subsystem: "Automatización",
      status: "Investigación",
    },
    {
      name: "Sistemas Eléctricos",
      description: "Distribución de energía y comunicaciones",
      subsystem: "Sistemas Eléctricos",
      status: "Prototipo",
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Nuestra Tuneladora</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubre la tecnología de vanguardia que está revolucionando la excavación subterránea. Una máquina diseñada
            para la eficiencia, precisión y sostenibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Modelo 3D Interactivo */}
          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl flex items-center justify-between">
                  Modelo 3D Interactivo
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
                  Arrastra para rotar • Usa los controles para pausar/reanudar • Zoom disponible
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Especificaciones Técnicas */}
          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">Especificaciones Técnicas</CardTitle>
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
                <CardTitle className="font-overpass text-xl">Características Destacadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Navegación Autónoma</h4>
                    <p className="text-white/70 text-sm">
                      Sistema de IA para navegación precisa y evitación de obstáculos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Eficiencia Energética</h4>
                    <p className="text-white/70 text-sm">Consumo optimizado con sistemas de recuperación de energía</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Monitoreo en Tiempo Real</h4>
                    <p className="text-white/70 text-sm">Sensores IoT para control remoto y análisis de datos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Diseño Modular</h4>
                    <p className="text-white/70 text-sm">
                      Componentes intercambiables para diferentes tipos de terreno
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
            <TabsTrigger value="components">Componentes</TabsTrigger>
            <TabsTrigger value="process">Proceso</TabsTrigger>
            <TabsTrigger value="innovation">Innovación</TabsTrigger>
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
                        variant={component.status === "Diseño final" ? "default" : "secondary"}
                        className={`text-xs ${
                          component.status === "Diseño final"
                            ? "bg-green-500/20 text-green-400"
                            : component.status === "Prototipo"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : component.status === "En desarrollo"
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
                <h3 className="font-overpass text-2xl font-bold mb-6">Proceso de Tunelización</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Análisis del Terreno</h4>
                      <p className="text-white/80">
                        Estudio geotécnico previo y mapeo 3D del área de excavación usando sensores avanzados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Posicionamiento Inicial</h4>
                      <p className="text-white/80">
                        La tuneladora se posiciona en el punto de entrada y calibra todos sus sistemas de navegación.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Excavación Controlada</h4>
                      <p className="text-white/80">
                        El cabezal cortador perfora mientras los sistemas de evacuación retiran el material excavado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Sostenimiento del Túnel</h4>
                      <p className="text-white/80">
                        Instalación automática de sistemas de contención para garantizar la estabilidad estructural.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Monitoreo Continuo</h4>
                      <p className="text-white/80">
                        Supervisión en tiempo real de todos los parámetros operacionales y de seguridad.
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
                  <CardTitle className="font-overpass text-xl">Innovaciones Tecnológicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">Inteligencia Artificial</h4>
                    <p className="text-white/80 text-sm">
                      Algoritmos de machine learning para optimización de rutas y predicción de condiciones del terreno.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">Materiales Avanzados</h4>
                    <p className="text-white/80 text-sm">
                      Aleaciones ligeras de alta resistencia y recubrimientos cerámicos para máxima durabilidad.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">Sistemas Híbridos</h4>
                    <p className="text-white/80 text-sm">
                      Combinación de propulsión eléctrica y sistemas de recuperación de energía cinética.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-overpass text-xl">Impacto Ambiental</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">Cero Emisiones</h4>
                    <p className="text-white/80 text-sm">
                      Funcionamiento 100% eléctrico con posibilidad de alimentación por energías renovables.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">Reciclaje de Materiales</h4>
                    <p className="text-white/80 text-sm">
                      Sistema de clasificación y reciclaje del material excavado para su reutilización.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">Mínimo Impacto Superficial</h4>
                    <p className="text-white/80 text-sm">
                      Reducción drástica de la perturbación del entorno urbano y natural.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-overpass text-2xl font-bold mb-4">¿Quieres saber más?</h2>
              <p className="text-white/80 mb-6">
                Descarga nuestro dossier técnico completo o únete al equipo para participar en el desarrollo de esta
                tecnología revolucionaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Dossier
                </Button>
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="/unete">Únete al Proyecto</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
