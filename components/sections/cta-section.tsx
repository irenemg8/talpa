"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#00338D] to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Overpass']"
          >
            ¿Listo para Hacer Historia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-12 leading-relaxed"
          >
            Únete a nosotros en esta aventura subterránea. Buscamos estudiantes apasionados y empresas visionarias que
            quieran ser parte del futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#00338D] hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
            >
              <Link href="/unete">
                <Users className="mr-2 w-5 h-5" />
                Únete como Estudiante
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#00338D] px-8 py-4 text-lg font-semibold group"
            >
              <Link href="/contacto">
                <Briefcase className="mr-2 w-5 h-5" />
                Colabora como Empresa
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
