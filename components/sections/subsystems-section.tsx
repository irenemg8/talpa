"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Megaphone, Zap, Wrench, Drill, Wind, Mountain, Shield, Bot, Cpu } from "lucide-react"

const subsystems = [
  {
    id: "partners",
    name: "Partners",
    icon: Users,
    description: "Gestión empresarial, patrocinios y relaciones estratégicas",
    color: "#00338D",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    description: "Identidad visual, comunicación y presencia digital",
    color: "#3B82F6",
  },
  {
    id: "propulsion",
    name: "Propulsión",
    icon: Zap,
    description: "Sistemas de avance y motores de alta eficiencia",
    color: "#10B981",
  },
  {
    id: "structural",
    name: "Diseño Estructural",
    icon: Wrench,
    description: "Chasis principal y integración de componentes",
    color: "#F59E0B",
  },
  {
    id: "cutting",
    name: "Corte y Excavación",
    icon: Drill,
    description: "Cabezales cortadores y sistemas de perforación",
    color: "#EF4444",
  },
  {
    id: "ventilation",
    name: "Ventilación",
    icon: Wind,
    description: "Evacuación de materiales y refrigeración",
    color: "#8B5CF6",
  },
  {
    id: "terrain",
    name: "Terrenos",
    icon: Mountain,
    description: "Estudios geotécnicos y comportamiento del suelo",
    color: "#84CC16",
  },
  {
    id: "containment",
    name: "Contención",
    icon: Shield,
    description: "Sistemas de sostenimiento del túnel",
    color: "#06B6D4",
  },
  {
    id: "automation",
    name: "Automatización",
    icon: Bot,
    description: "IA, robótica y optimización de procesos",
    color: "#EC4899",
  },
  {
    id: "electrical",
    name: "Sistemas Eléctricos",
    icon: Cpu,
    description: "Electrónica, control y sistemas embebidos",
    color: "#F97316",
  },
]

export function SubsystemsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Overpass']">Nuestros Subsistemas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diez áreas especializadas trabajando en conjunto para crear la tuneladora más avanzada de la competición
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {subsystems.map((subsystem, index) => (
            <motion.div
              key={subsystem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${subsystem.color}20` }}
                    >
                      <subsystem.icon className="w-8 h-8" style={{ color: subsystem.color }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 font-['Overpass']">{subsystem.name}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed">{subsystem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
