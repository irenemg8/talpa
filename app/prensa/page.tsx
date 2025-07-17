"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Share2 } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  image: string
  author: string
  linkedinUrl: string
}

const articles: Article[] = [
  {
    id: "1",
    title: "Las Tuneladoras del Canal de la Mancha: Inspiración para Talpa Tunneling UPV",
    excerpt: "Descubre cómo las legendarias tuneladoras que construyeron el Canal de la Mancha inspiraron nuestro proyecto de micro-tuneladora.",
    content: `El Canal de la Mancha, una de las obras de ingeniería más impresionantes del siglo XX, fue posible gracias a las tuneladoras más avanzadas de su época. Estas máquinas gigantescas, con más de 8 metros de diámetro, excavaron 50 kilómetros de túneles submarinos conectando Francia y Reino Unido.

En Talpa Tunneling UPV, nos inspiramos en esta hazaña histórica para desarrollar nuestra micro-tuneladora. Aunque nuestro proyecto tiene un enfoque diferente - crear una máquina más pequeña, eficiente y sostenible - los principios fundamentales de navegación precisa, excavación controlada y gestión de materiales siguen siendo los mismos.

Las tuneladoras del Canal utilizaron tecnología pionera en automatización y control de calidad, aspectos que hemos incorporado en nuestro diseño con las últimas innovaciones en inteligencia artificial y IoT. Nuestro objetivo es llevar esta tecnología a un nuevo nivel, haciéndola accesible para proyectos de menor escala pero igual importancia.

Este legado de innovación nos motiva a seguir desarrollando soluciones que revolucionen la excavación subterránea, manteniendo siempre los más altos estándares de seguridad y eficiencia.`,
    date: "2024-01-15",
    category: "Historia",
    readTime: "4 min",
    image: "/placeholder.jpg",
    author: "Equipo Talpa Tunneling UPV",
    linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_tuneladoras-canal-canal-activity-7349059833708408832-prV1"
  },
  {
    id: "2",
    title: "Talpa Tunneling UPV en el UPV-ISTOBAL Event Series",
    excerpt: "Nuestro equipo participó en el prestigioso evento UPV-ISTOBAL, presentando nuestra visión de la tunelización del futuro.",
    content: `El pasado mes tuvimos el honor de participar en el UPV-ISTOBAL Event Series, un encuentro que reúne a los mejores talentos de la Universidad Politécnica de Valencia con empresas líderes en innovación tecnológica.

Durante nuestra presentación, compartimos los avances más recientes en el desarrollo de nuestra micro-tuneladora, destacando las innovaciones en automatización, eficiencia energética y sostenibilidad ambiental. El evento fue una excelente oportunidad para conectar con profesionales de la industria y recibir feedback valioso sobre nuestro proyecto.

ISTOBAL, líder mundial en soluciones de lavado y cuidado de vehículos, mostró gran interés en nuestro enfoque tecnológico, especialmente en los aspectos de automatización y control de calidad. Esta sinergia entre diferentes sectores industriales demuestra que la innovación no tiene límites y que las soluciones desarrolladas en un campo pueden inspirar avances en otros.

El networking generado durante el evento ha abierto nuevas oportunidades de colaboración y nos ha permitido establecer contactos clave para el futuro desarrollo del proyecto. Agradecemos a la UPV e ISTOBAL por brindar esta plataforma excepcional para el intercambio de ideas y la promoción del talento universitario.

Este tipo de eventos refuerza nuestro compromiso con la excelencia académica y la innovación aplicada, pilares fundamentales de Talpa Tunneling UPV.`,
    date: "2024-01-10",
    category: "Eventos",
    readTime: "3 min",
    image: "/placeholder.jpg",
    author: "Equipo Talpa Tunneling UPV",
    linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_upv-talpatunnelingupv-istobal-activity-7346205033991933952-nKW3"
  },
  {
    id: "3",
    title: "Las Tuneladoras Más Impresionantes de la Historia: Bertha, Martina y Big Becky",
    excerpt: "Un recorrido por las máquinas más extraordinarias que han marcado la historia de la excavación subterránea.",
    content: `A lo largo de la historia, las tuneladoras han sido protagonistas de algunas de las obras de ingeniería más ambiciosas del mundo. Hoy queremos rendir homenaje a tres de las más impresionantes: Bertha, Martina y Big Becky.

**Bertha** - La tuneladora más grande del mundo, con 17.5 metros de diámetro, fue utilizada para excavar el túnel de la Autopista 99 en Seattle. Su nombre honra a Bertha Knight Landes, la primera mujer alcalde de Seattle. A pesar de los desafíos técnicos que enfrentó, Bertha demostró las capacidades extremas de la ingeniería moderna.

**Martina** - Esta tuneladora de 15.87 metros de diámetro fue empleada en el proyecto del túnel del Elba en Hamburgo. Su diseño innovador incorporó tecnologías avanzadas de navegación y control de presión, estableciendo nuevos estándares en la industria.

**Big Becky** - Con 14.4 metros de diámetro, esta máquina excavó el túnel de Niágara en Toronto. Su nombre popular refleja el cariño que estas máquinas generan en las comunidades donde operan.

Estas gigantes de la ingeniería nos inspiran en Talpa Tunneling UPV a pensar en grande, pero también nos motivan a desarrollar soluciones más eficientes y sostenibles. Mientras ellas conquistaron proyectos masivos, nosotros buscamos democratizar la tecnología de tunelización para proyectos de menor escala pero igual importancia.

El futuro de la tunelización no solo está en hacer máquinas más grandes, sino más inteligentes, eficientes y respetuosas con el medio ambiente.`,
    date: "2024-01-05",
    category: "Tecnología",
    readTime: "5 min",
    image: "/placeholder.jpg",
    author: "Equipo Talpa Tunneling UPV",
    linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_taeqneles-autopista-tuneladoras-activity-7343956199094083586-H_fZ"
  },
  {
    id: "4",
    title: "Micro-Tuneladoras: El Futuro de las Infraestructuras Subterráneas",
    excerpt: "Exploramos cómo las micro-tuneladoras están revolucionando la construcción de infraestructuras subterráneas urbanas.",
    content: `En un mundo cada vez más urbanizado, las infraestructuras subterráneas se han convertido en una necesidad crítica. Las micro-tuneladoras representan una evolución natural de la tecnología tradicional, ofreciendo soluciones más precisas, eficientes y sostenibles para entornos urbanos complejos.

**Ventajas de las Micro-Tuneladoras:**

- **Menor impacto superficial:** Reducen significativamente la perturbación del tráfico y las actividades urbanas
- **Precisión milimétrica:** Navegación avanzada permite excavaciones exactas en espacios reducidos
- **Eficiencia energética:** Consumo optimizado de recursos comparado con tuneladoras tradicionales
- **Flexibilidad operativa:** Capacidad de adaptarse a diferentes tipos de terreno y condiciones

En Talpa Tunneling UPV, hemos identificado que el futuro de la excavación urbana está en la miniaturización inteligente. Nuestro prototipo incorpora tecnologías de vanguardia como inteligencia artificial para navegación autónoma, sensores IoT para monitoreo en tiempo real, y sistemas de recuperación de energía.

Las aplicaciones son infinitas: desde instalación de redes de fibra óptica hasta sistemas de drenaje urbano, pasando por infraestructuras de servicios públicos. La versatilidad de estas máquinas las convierte en herramientas esenciales para las ciudades del futuro.

Estamos convencidos de que las micro-tuneladoras no solo complementarán a las grandes máquinas, sino que abrirán nuevas posibilidades en proyectos que antes eran inviables técnica o económicamente.`,
    date: "2024-01-01",
    category: "Innovación",
    readTime: "6 min",
    image: "/placeholder.jpg",
    author: "Equipo Talpa Tunneling UPV",
    linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_microtuneladora-infraestructuras-subterraerneas-activity-7341400395052658688-buPd"
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

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Sala de Prensa</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mantente al día con las últimas noticias, artículos y actualizaciones del equipo Talpa Tunneling UPV.
            Descubre nuestros avances en tecnología de tunelización y participación en eventos.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="glass-card border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#00338d]/20 text-[#00338d] border-[#00338d]/30">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-white/60">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="font-overpass text-lg font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Por {article.author}</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2"
                      onClick={() => window.open(article.linkedinUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 