"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Users, Wrench, Trophy, GraduationCap, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const { t } = useTranslation()
  
  const faqs: FAQ[] = [
    // Sobre el Proyecto
    {
      id: "1",
      question: t("faq.question1"),
      answer: t("faq.answer1"),
      category: "proyecto"
    },
    {
      id: "2",
      question: t("faq.question2"),
      answer: t("faq.answer2"),
      category: "proyecto"
    },
    {
      id: "3",
      question: t("faq.question3"),
      answer: t("faq.answer3"),
      category: "proyecto"
    },
    {
      id: "4",
      question: t("faq.question4"),
      answer: t("faq.answer4"),
      category: "proyecto"
    },

    // Únete al Equipo
    {
      id: "5",
      question: t("faq.question5"),
      answer: t("faq.answer5"),
      category: "equipo"
    },
    {
      id: "6",
      question: t("faq.question6"),
      answer: t("faq.answer6"),
      category: "equipo"
    },
    {
      id: "7",
      question: t("faq.question7"),
      answer: t("faq.answer7"),
      category: "equipo"
    },
    {
      id: "8",
      question: t("faq.question8"),
      answer: t("faq.answer8"),
      category: "equipo"
    },
    {
      id: "9",
      question: t("faq.question9"),
      answer: t("faq.answer9"),
      category: "equipo"
    },

    // Tecnología
    {
      id: "10",
      question: t("faq.question10"),
      answer: t("faq.answer10"),
      category: "tecnologia"
    },
    {
      id: "11",
      question: t("faq.question11"),
      answer: t("faq.answer11"),
      category: "tecnologia"
    },
    {
      id: "12",
      question: t("faq.question12"),
      answer: t("faq.answer12"),
      category: "tecnologia"
    },

    // Competición
    {
      id: "13",
      question: t("faq.question13"),
      answer: t("faq.answer13"),
      category: "competicion"
    },
    {
      id: "14",
      question: t("faq.question14"),
      answer: t("faq.answer14"),
      category: "competicion"
    },
    {
      id: "15",
      question: t("faq.question15"),
      answer: t("faq.answer15"),
      category: "competicion"
    },

    // Académico
    {
      id: "16",
      question: t("faq.question16"),
      answer: t("faq.answer16"),
      category: "academico"
    },
    {
      id: "17",
      question: t("faq.question17"),
      answer: t("faq.answer17"),
      category: "academico"
    },
    {
      id: "18",
      question: t("faq.question18"),
      answer: t("faq.answer18"),
      category: "academico"
    }
  ]

  const categories = [
    { id: "proyecto", name: t("faq.categoryProject"), icon: MessageCircle, color: "bg-blue-500/20 text-blue-400" },
    { id: "equipo", name: t("faq.categoryTeam"), icon: Users, color: "bg-green-500/20 text-green-400" },
    { id: "tecnologia", name: t("faq.categoryTechnology"), icon: Wrench, color: "bg-purple-500/20 text-purple-400" },
    { id: "competicion", name: t("faq.categoryCompetition"), icon: Trophy, color: "bg-yellow-500/20 text-yellow-400" },
    { id: "academico", name: t("faq.categoryAcademic"), icon: GraduationCap, color: "bg-red-500/20 text-red-400" }
  ]
  
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("faq.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("faq.subtitle")}
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
                <h2 className="font-overpass text-2xl font-bold">{t("faq.notFoundAnswer")}</h2>
              </div>
              <p className="text-white/80 mb-6">
                {t("faq.notFoundAnswerDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="mailto:talpatunnelingupv@gmail.com">
                    {t("faq.contactUs")}
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