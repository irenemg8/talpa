"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"

// Pre-generated positions and animation timings to avoid hydration mismatch
const starPositions = [
  { left: 15.5, top: 20.3, duration: 4.2, delay: 0.5 },
  { left: 82.1, top: 45.7, duration: 3.8, delay: 1.2 },
  { left: 45.3, top: 78.9, duration: 4.5, delay: 0.8 },
  { left: 67.8, top: 12.4, duration: 3.3, delay: 1.8 },
  { left: 23.9, top: 89.1, duration: 4.8, delay: 0.3 },
  { left: 91.2, top: 34.6, duration: 3.7, delay: 1.5 },
  { left: 8.7, top: 65.2, duration: 4.1, delay: 0.9 },
  { left: 76.4, top: 23.8, duration: 3.9, delay: 1.1 },
  { left: 34.1, top: 56.7, duration: 4.3, delay: 0.7 },
  { left: 58.9, top: 91.3, duration: 3.6, delay: 1.4 },
  { left: 12.3, top: 43.5, duration: 4.7, delay: 0.4 },
  { left: 89.6, top: 67.8, duration: 3.4, delay: 1.7 },
  { left: 43.7, top: 15.9, duration: 4.0, delay: 0.6 },
  { left: 71.2, top: 82.4, duration: 3.8, delay: 1.3 },
  { left: 26.5, top: 38.7, duration: 4.4, delay: 0.9 },
  { left: 95.1, top: 51.2, duration: 3.5, delay: 1.6 },
  { left: 7.8, top: 29.4, duration: 4.6, delay: 0.2 },
  { left: 63.4, top: 74.8, duration: 3.7, delay: 1.0 },
  { left: 38.9, top: 8.6, duration: 4.1, delay: 1.9 },
  { left: 84.7, top: 95.3, duration: 3.9, delay: 0.1 },
]

export function HeroSection() {
  const { t } = useTranslation()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#00338D] opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {starPositions.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-8">
              <Image 
                src="/logo.png" 
                alt="Talpa Tunneling UPV" 
                width={80} 
                height={80}
                className="mx-auto"
              />
            </div>
            <span className="inline-block px-4 py-2 bg-[#00338D] bg-opacity-20 border border-[#00338D] rounded-full text-[#00338D] text-sm font-medium mb-6">
              Not-a-Boring Competition 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Overpass']"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#00338D] hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group"
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
                {t("hero.joinTeam")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold group"
            >
              <Link href="/tuneladora">
                <Play className="mr-2 w-5 h-5" />
                {t("hero.exploreTunneler")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
