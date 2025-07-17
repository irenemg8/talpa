"use client"

import { motion } from "framer-motion"
import { Users, Zap, Target, Trophy } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Estudiantes",
    description: "Talento multidisciplinar",
  },
  {
    icon: Zap,
    value: "10",
    label: "Subsistemas",
    description: "Áreas especializadas",
  },
  {
    icon: Target,
    value: "2025",
    label: "Competición",
    description: "Not-a-Boring Competition",
  },
  {
    icon: Trophy,
    value: "1º",
    label: "Objetivo",
    description: "Posición en España",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00338D] to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-[#00338D] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Overpass']"
              >
                {stat.value}
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-1 font-['Overpass']">{stat.label}</h3>

              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
