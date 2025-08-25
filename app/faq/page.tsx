"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Users, Wrench, Trophy, GraduationCap, Mail } from "lucide-react"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  // Sobre el Proyecto
  {
    id: "1",
    question: "¿Qué es Talpa Tunneling UPV?",
    answer: "Talpa Tunneling UPV es un equipo de Generación Espontánea formado por estudiantes de la Universidad Politécnica de Valencia (UPV). Nuestro objetivo es diseñar, construir y operar una micro-tuneladora para participar en la Not a Boring Competition 2026, organizada por The Boring Company de Elon Musk.",
    category: "proyecto"
  },
  {
    id: "2",
    question: "¿Qué es la Not a Boring Competition?",
    answer: "La Not a Boring Competition es una competición internacional organizada por The Boring Company que desafía a equipos de todo el mundo a diseñar y construir sistemas de tunelización innovadores. El objetivo es acelerar el desarrollo de tecnologías de excavación subterránea más eficientes y sostenibles.",
    category: "proyecto"
  },
  {
    id: "3",
    question: "¿Qué es Generación Espontánea?",
    answer: "Generación Espontánea es una iniciativa de la UPV que fomenta la innovación y el emprendimiento entre los estudiantes. Proporciona apoyo, recursos y mentorización para proyectos ambiciosos desarrollados por estudiantes universitarios.",
    category: "proyecto"
  },
  {
    id: "4",
    question: "¿Cuándo se celebra la competición?",
    answer: "La Not a Boring Competition 2026 está programada para primavera de 2026 en Bastrop, Texas. Sin embargo, el desarrollo y las pruebas de nuestra micro-tuneladora comenzarán mucho antes, con hitos importantes a lo largo de 2025.",
    category: "proyecto"
  },

  // Únete al Equipo
  {
    id: "5",
    question: "¿Cómo puedo unirme al equipo?",
    answer: "Para unirte a Talpa Tunneling UPV, debes completar el formulario de inscripción disponible en nuestra página web. El proceso incluye seleccionar los subsistemas que más te interesen, explicar tu motivación y proporcionar información sobre tu experiencia académica y técnica.",
    category: "equipo"
  },
  {
    id: "6",
    question: "¿Qué requisitos necesito para participar?",
    answer: "Debes ser estudiante de la UPV (grado, máster o doctorado) y tener pasión por la ingeniería y la innovación. No se requiere experiencia previa específica, ya que proporcionamos formación en las áreas necesarias. Lo más importante es la motivación, el trabajo en equipo y las ganas de aprender.",
    category: "equipo"
  },
  {
    id: "7",
    question: "¿Qué subsistemas hay disponibles?",
    answer: "Nuestro equipo está organizado en 10 subsistemas principales: Partners, Marketing, Propulsión, Diseño Estructural, Corte y Excavación, Ventilación y Desescombro, Terrenos, Contención, Automatización, y Sistemas Eléctricos. Cada subsistema ofrece diferentes oportunidades de aprendizaje y desarrollo.",
    category: "equipo"
  },
  {
    id: "8",
    question: "¿Puedo participar si estoy en primer año?",
    answer: "¡Absolutamente! Aceptamos estudiantes de todos los cursos, desde primer año hasta doctorado. La diversidad de niveles académicos enriquece el equipo y permite un aprendizaje colaborativo. Los estudiantes más experimentados actúan como mentores para los nuevos.",
    category: "equipo"
  },
  {
    id: "9",
    question: "¿Cuánto tiempo de dedicación se requiere?",
    answer: "El tiempo de dedicación varía según el subsistema y la disponibilidad de los miembros del equipo. Generalmente, esperamos un compromiso de varias horas semanales durante el curso académico, con mayor intensidad cerca de los hitos importantes y la competición final.",
    category: "equipo"
  },

  // Tecnología
  {
    id: "10",
    question: "¿Qué es una micro-tuneladora?",
    answer: "Una micro-tuneladora es una versión miniaturizada de las grandes máquinas de excavación subterránea. Está diseñada para ser más eficiente, precisa y sostenible que las tuneladoras tradicionales, ideal para proyectos urbanos de menor escala como instalación de servicios públicos o infraestructuras subterráneas.",
    category: "tecnologia"
  },
  {
    id: "11",
    question: "¿Qué tecnologías utilizamos?",
    answer: "Nuestro proyecto incorpora tecnologías de vanguardia, sensores para monitoreo en tiempo real, sistemas de control automatizado, materiales avanzados, y sistemas de recuperación de energía. Todo integrado en un diseño compacto y eficiente.",
    category: "tecnologia"
  },
  {
    id: "12",
    question: "¿Dónde desarrollamos y probamos la tuneladora?",
    answer: "El desarrollo se realiza en las instalaciones de la UPV, utilizando laboratorios especializados y talleres. Para las pruebas, trabajamos con terrenos de prueba controlados y colaboramos con empresas del sector para validar nuestros diseños en condiciones reales.",
    category: "tecnologia"
  },

  // Competición
  {
    id: "13",
    question: "¿Contra quién competimos?",
    answer: "Competimos contra equipos universitarios de todo el mundo, incluyendo universidades prestigiosas como MIT, Stanford, ETH Zurich, y muchas otras. Es una oportunidad única para demostrar el talento español en ingeniería a nivel internacional.",
    category: "competicion"
  },
  {
    id: "14",
    question: "¿Cómo se evalúa la competición?",
    answer: "La competición evalúa múltiples aspectos: velocidad de excavación, precisión de navegación, eficiencia energética, innovación tecnológica, presentación del proyecto, y capacidad del equipo. No solo se trata de construir la tuneladora más rápida, sino la más completa y innovadora.",
    category: "competicion"
  },
  {
    id: "15",
    question: "¿Qué premios hay?",
    answer: "Además del reconocimiento internacional, la competición ofrece premios, oportunidades de networking con empresas del sector, posibilidades de inversión para comercializar las tecnologías desarrolladas, y acceso a programas de aceleración empresarial.",
    category: "competicion"
  },

  // Académico
  {
    id: "16",
    question: "¿Puedo validar créditos académicos?",
    answer: "Sí, la participación en Talpa Tunneling UPV puede validarse como créditos de actividades extracurriculares, prácticas en empresa, o incluso como Trabajo de Fin de Grado/Máster, dependiendo de tu grado de implicación y el subsistema en el que participes.",
    category: "academico"
  },
  {
    id: "17",
    question: "¿Hay becas o ayudas disponibles?",
    answer: "A través de Generación Espontánea y nuestros sponsors, ofrecemos ayudas para transporte, alojamiento para la competición, y material técnico. También hay oportunidades de becas de colaboración y prácticas remuneradas con nuestras empresas patrocinadoras.",
    category: "academico"
  },
  {
    id: "18",
    question: "¿Qué aprenderé participando?",
    answer: "Desarrollarás competencias técnicas avanzadas, habilidades de trabajo en equipo, gestión de proyectos, presentación pública, resolución de problemas complejos, y liderazgo. También obtendrás experiencia práctica en tecnologías de vanguardia y contactos profesionales valiosos.",
    category: "academico"
  }
]

const categories = [
  { id: "proyecto", name: "Sobre el Proyecto", icon: MessageCircle, color: "bg-blue-500/20 text-blue-400" },
  { id: "equipo", name: "Únete al Equipo", icon: Users, color: "bg-green-500/20 text-green-400" },
  { id: "tecnologia", name: "Tecnología", icon: Wrench, color: "bg-purple-500/20 text-purple-400" },
  { id: "competicion", name: "Competición", icon: Trophy, color: "bg-yellow-500/20 text-yellow-400" },
  { id: "academico", name: "Académico", icon: GraduationCap, color: "bg-red-500/20 text-red-400" }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre Talpa Tunneling UPV, 
            nuestro proyecto, la competición y cómo formar parte del equipo.
          </p>
        </div>

        {/* FAQ by Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category) => {
            const categoryFAQs = faqs.filter(faq => faq.category === category.id)
            const Icon = category.icon
            
            return (
              <div key={category.id} className="space-y-6 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-overpass text-2xl font-bold">{category.name}</h2>
                </div>
                
                <Card className="glass-card border-white/10">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {categoryFAQs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border-white/10">
                          <AccordionTrigger className="text-left font-overpass font-semibold text-white hover:text-white/80">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-white/80 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <Card className="glass-card border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Mail className="h-6 w-6 text-[#00338d]" />
                <h2 className="font-overpass text-2xl font-bold">¿No encuentras tu respuesta?</h2>
              </div>
              <p className="text-white/80 mb-6">
                Si tienes alguna pregunta específica que no aparece en esta lista, 
                no dudes en contactarnos. Estaremos encantados de ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="mailto:talpatunnelingupv@gmail.com">
                    Contáctanos
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