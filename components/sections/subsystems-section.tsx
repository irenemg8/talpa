"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Megaphone, Zap, Wrench, Drill, Wind, Mountain, Shield, Bot, Cpu } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function SubsystemsSection() {
  const { t } = useTranslation()
  
  const subsystems = [
  {
    id: "partners",
    name: t("subsystems.partners"),
    icon: Users,
    description: t("subsystems.partnersDesc"),
    color: "#00338D",
  },
  {
    id: "marketing",
    name: t("subsystems.marketing"),
    icon: Megaphone,
    description: t("subsystems.marketingDesc"),
    color: "#3B82F6",
  },
  {
    id: "propulsion",
    name: t("subsystems.propulsion"),
    icon: Zap,
    description: t("subsystems.propulsionDesc"),
    color: "#10B981",
  },
  {
    id: "structural",
    name: t("subsystems.structural"),
    icon: Wrench,
    description: t("subsystems.structuralDesc"),
    color: "#F59E0B",
  },
  {
    id: "cutting",
    name: t("subsystems.cutting"),
    icon: Drill,
    description: t("subsystems.cuttingDesc"),
    color: "#EF4444",
  },
  {
    id: "ventilation",
    name: t("subsystems.ventilation"),
    icon: Wind,
    description: t("subsystems.ventilationDesc"),
    color: "#8B5CF6",
  },
  {
    id: "terrain",
    name: t("subsystems.terrain"),
    icon: Mountain,
    description: t("subsystems.terrainDesc"),
    color: "#84CC16",
  },
  {
    id: "containment",
    name: t("subsystems.containment"),
    icon: Shield,
    description: t("subsystems.containmentDesc"),
    color: "#06B6D4",
  },
  {
    id: "automation",
    name: t("subsystems.automation"),
    icon: Bot,
    description: t("subsystems.automationDesc"),
    color: "#EC4899",
  },
  {
    id: "electrical",
    name: t("subsystems.electrical"),
    icon: Cpu,
    description: t("subsystems.electricalDesc"),
    color: "#F97316",
  },
]

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("subsystems.title")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("subsystems.description")}
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

                  <h3 className="text-lg font-semibold text-white mb-3">{subsystem.name}</h3>

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
