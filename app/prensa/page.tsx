"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Share2, Linkedin, Users, Trophy, Zap } from "lucide-react"
import { getAssetPath } from "@/lib/assets"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  image: string | null
  author: string
  linkedinUrl: string
  likes: number
  comments: number
}

const articles: Article[] = [
  {
    id: "1",
    title: "🚀 ¡Lanzamos oficialmente Talpa Tunneling UPV!",
    excerpt: "Presentamos nuestro proyecto de microtuneladora para la Not a Boring Competition. Un equipo multidisciplinar de estudiantes de la UPV listos para revolucionar la excavación subterránea.",
    content: `Hoy marca un hito importante para nuestro equipo: el lanzamiento oficial de Talpa Tunneling UPV. Somos un grupo de estudiantes apasionados de la Universidad Politécnica de Valencia que hemos decidido enfrentar uno de los desafíos más emocionantes de la ingeniería moderna: la Not a Boring Competition.

Nuestro proyecto consiste en desarrollar una microtuneladora innovadora, compacta y eficiente que pueda competir a nivel internacional. Con un diámetro de excavación de 1.2 metros y tecnología de vanguardia, nuestra máquina representa el futuro de las infraestructuras subterráneas urbanas.

El equipo está formado por más de 30 estudiantes de diferentes disciplinas: ingeniería mecánica, informática, telecomunicaciones, diseño industrial y más. Esta diversidad nos permite abordar el proyecto desde múltiples perspectivas y crear soluciones verdaderamente innovadoras.

¡Seguimos trabajando duro para hacer realidad este sueño y poner a la UPV en el mapa mundial de la innovación en tunelización!`,
    date: "2025-01-20",
    category: "Anuncio",
    readTime: "3 min",
    image: "placeholder.jpg",
    author: "Talpa Tunneling UPV",
    linkedinUrl: "https://www.linkedin.com/company/talpa-tunneling-upv/posts/",
    likes: 127,
    comments: 15
  },
  {
    id: "2",
    title: "🏆 Avances en el desarrollo de nuestro prototipo",
    excerpt: "Compartimos los últimos avances en el diseño y desarrollo de nuestra microtuneladora. Desde el sistema de propulsión hasta los controles automatizados.",
    content: `Las últimas semanas han sido intensas en el laboratorio. Nuestro equipo de ingeniería mecánica ha logrado importantes avances en el diseño del sistema de propulsión de 136 CV, mientras que el equipo de control ha implementado los primeros prototipos del sistema de navegación LiDAR.

Los subsistemas principales están tomando forma:
- ✅ Chasis estructural de acero S275 completado
- 🔄 Sistema de propulsión en fase de prototipado
- 🤖 Algoritmos de navegación autónoma en desarrollo
- ⚡ Sistema eléctrico de 100 kW en diseño

Cada componente está siendo diseñado con los más altos estándares de calidad y eficiencia. Nuestro objetivo es crear una máquina que no solo sea competitiva, sino que establezca nuevos benchmarks en la industria.

El trabajo en equipo y la dedicación de cada miembro están siendo fundamentales para alcanzar estos hitos. ¡Pronto tendremos más novedades que compartir!`,
    date: "2025-01-15",
    category: "Desarrollo",
    readTime: "4 min",
    image: null,
    author: "Equipo Técnico",
    linkedinUrl: "https://www.linkedin.com/company/talpa-tunneling-upv/posts/",
    likes: 89,
    comments: 8
  },
  {
    id: "3",
    title: "🤝 Colaboración con empresas del sector",
    excerpt: "Establecemos alianzas estratégicas con empresas líderes en tecnología y construcción para potenciar nuestro proyecto y crear sinergias innovadoras.",
    content: `La innovación no sucede en el vacío. Por eso, estamos orgullosos de anunciar las primeras colaboraciones con empresas del sector que comparten nuestra visión de revolucionar la tunelización.

Estas alianzas estratégicas nos permitirán:
- Acceder a tecnologías de vanguardia
- Recibir mentoría de expertos de la industria
- Validar nuestros diseños con profesionales experimentados
- Explorar oportunidades de comercialización futura

El feedback que estamos recibiendo de los profesionales del sector es extremadamente positivo. Ven en nuestro proyecto no solo una iniciativa académica, sino una propuesta real con potencial de impacto en la industria.

Estas colaboraciones refuerzan nuestro compromiso de crear soluciones que no solo funcionen en el laboratorio, sino que puedan ser implementadas en el mundo real para resolver problemas reales.

¡Gracias a todas las empresas que están creyendo en nuestro proyecto!`,
    date: "2025-01-10",
    category: "Colaboración",
    readTime: "3 min",
    image: "placeholder.jpg",
    author: "Equipo de Partnerships",
    linkedinUrl: "https://www.linkedin.com/company/talpa-tunneling-upv/posts/",
    likes: 156,
    comments: 22
  },
  {
    id: "4",
    title: "⚡ Innovación en sistemas de control automatizado",
    excerpt: "Nuestro equipo de automatización presenta los avances en inteligencia artificial y control remoto para la navegación autónoma de la microtuneladora.",
    content: `La automatización es el corazón de nuestra microtuneladora. Nuestro equipo de control e informática está desarrollando sistemas que permitirán a la máquina operar de forma autónoma con precisión milimétrica.

**Características del sistema de control:**
- 🎯 Navegación LiDAR para mapeo 3D en tiempo real
- 🤖 Algoritmos de IA para toma de decisiones autónomas
- 📡 Control remoto para supervisión y override manual
- 📊 Monitorización continua de parámetros operacionales

El sistema será capaz de adaptarse a diferentes tipos de terreno, evitar obstáculos y mantener la trayectoria programada con una precisión que supera los estándares actuales de la industria.

Estamos particularmente orgullosos de los algoritmos de machine learning que hemos desarrollado para la predicción de condiciones del terreno. Esto permitirá que la máquina ajuste automáticamente su velocidad y fuerza de corte para optimizar la eficiencia.

La integración de todas estas tecnologías está siendo un desafío emocionante que está impulsando nuestro aprendizaje y crecimiento como ingenieros.`,
    date: "2025-01-05",
    category: "Tecnología",
    readTime: "5 min",
    image: null,
    author: "Equipo de Control",
    linkedinUrl: "https://www.linkedin.com/company/talpa-tunneling-upv/posts/",
    likes: 203,
    comments: 31
  },
  {
    id: "5",
    title: "🌱 Sostenibilidad y eficiencia energética",
    excerpt: "Comprometidos con el medio ambiente, nuestra microtuneladora incorpora tecnologías limpias y sistemas de eficiencia energética de última generación.",
    content: `En Talpa Tunneling UPV creemos que la innovación debe ir de la mano con la responsabilidad ambiental. Por eso, hemos diseñado nuestra microtuneladora con un enfoque integral en sostenibilidad.

**Características sostenibles:**
- 🔋 Propulsión 100% eléctrica con motor de 136 CV
- ♻️ Sistema de recuperación de energía durante el frenado
- 🌿 Cero emisiones directas durante la operación
- 💨 Sistema neumático eficiente para evacuación de materiales
- 📉 Consumo energético optimizado mediante IA

Nuestro sistema de gestión energética inteligente puede reducir el consumo hasta un 30% comparado con sistemas tradicionales, mientras que el diseño compacto minimiza el impacto superficial en las obras.

Además, estamos explorando la posibilidad de alimentar la máquina con energía renovable, lo que la convertiría en una solución completamente limpia para la excavación urbana.

El futuro de la construcción debe ser sostenible, y estamos orgullosos de contribuir a ese futuro desde la universidad.`,
    date: "2024-12-28",
    category: "Sostenibilidad",
    readTime: "4 min",
    image: "placeholder.jpg",
    author: "Equipo de Sostenibilidad",
    linkedinUrl: "https://www.linkedin.com/company/talpa-tunneling-upv/posts/",
    likes: 174,
    comments: 18
  },
  {
    id: "6",
    title: "👥 Conoce a nuestro equipo multidisciplinar",
    excerpt: "Más de 30 estudiantes de diferentes carreras trabajando juntos hacia un objetivo común. Descubre la diversidad y talento que impulsa nuestro proyecto.",
    content: `La fortaleza de Talpa Tunneling UPV reside en la diversidad de nuestro equipo. Más de 30 estudiantes de la UPV de diferentes disciplinas han unido sus talentos para hacer realidad este proyecto ambicioso.

**Nuestros subsistemas:**
- 🔧 Mecánica: Diseño estructural, propulsión y excavación
- 💻 Control: Automatización, firmware y sistemas inteligentes
- 🏗️ Terrenos: Geotecnia y análisis de suelos
- 🤝 Operaciones: Gestión, marketing y partnerships

Cada miembro aporta una perspectiva única y conocimientos especializados. Desde estudiantes de primer año hasta máster, todos contribuyen con entusiasmo y dedicación al proyecto.

La colaboración interdisciplinar nos ha permitido abordar desafíos complejos desde múltiples ángulos y encontrar soluciones innovadoras que no habrían sido posibles trabajando en silos.

Estamos convencidos de que esta diversidad es nuestra mayor ventaja competitiva y el secreto de nuestro éxito hasta ahora.

¡Conoce más sobre nuestro increíble equipo en nuestra página web!`,
    date: "2024-12-20",
    category: "Equipo",
    readTime: "3 min",
    image: null,
    author: "Dirección del Proyecto",
    linkedinUrl: "https://www.linkedin.com/company/talpa-tunneling-upv/posts/",
    likes: 245,
    comments: 42
  }
]

export default function PrensaPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getImageSrc = (image: string | null) => {
    if (!image) return getAssetPath("placeholder.svg")
    return getAssetPath(image)
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Sala de Prensa</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Mantente al día con las últimas noticias y actualizaciones del equipo Talpa Tunneling UPV. 
            Todas nuestras publicaciones oficiales de LinkedIn en un solo lugar.
          </p>
          
          {/* Enlace a LinkedIn */}
          <Button 
            asChild 
            variant="outline" 
            className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/80 transition-all duration-200"
          >
            <a 
              href="https://www.linkedin.com/company/talpa-tunneling-upv/posts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Síguenos en LinkedIn
            </a>
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="glass-card border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden group hover:scale-105">
              <div className="relative">
                <img
                  src={getImageSrc(article.image)}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#00338d]/20 text-[#00338d] border-[#00338d]/30 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
                {!article.image && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center">
                      <Zap className="h-12 w-12 text-[#00338d] mx-auto mb-2" />
                      <p className="text-white/60 text-sm">Talpa Tunneling UPV</p>
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-white/60">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-overpass text-lg font-bold mb-3 line-clamp-2 group-hover:text-[#00338d] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* LinkedIn-style engagement */}
                <div className="flex items-center justify-between mb-4 text-sm text-white/60">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <span className="text-red-500 mr-1">❤️</span>
                      {article.likes}
                    </span>
                    <span>{article.comments} comentarios</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-white/60 text-sm">Por {article.author}</span>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 hover:bg-white/10 hover:scale-110 transition-all"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: article.title,
                            text: article.excerpt,
                            url: article.linkedinUrl
                          })
                        }
                      }}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 hover:bg-[#0077B5]/20 hover:text-[#0077B5] hover:scale-110 transition-all"
                      onClick={() => window.open(article.linkedinUrl, '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para más contenido */}
        <div className="text-center mt-16">
          <Card className="glass-card border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-[#00338d] mx-auto mb-4" />
              <h2 className="font-overpass text-2xl font-bold mb-4">¿Quieres estar al día?</h2>
              <p className="text-white/80 mb-6">
                Síguenos en LinkedIn para no perderte ninguna actualización sobre nuestro proyecto. 
                Publicamos regularmente sobre nuestros avances, eventos y colaboraciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-[#0077B5] hover:bg-[#0077B5]/80 border border-[#0077B5] hover:border-[#0077B5]/80 transition-all duration-200"
                >
                  <a 
                    href="https://www.linkedin.com/company/talpa-tunneling-upv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Seguir en LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10 hover:border-white/50">
                  <a href="/contacto">
                    <span className="font-medium">Contactar con el Equipo</span>
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