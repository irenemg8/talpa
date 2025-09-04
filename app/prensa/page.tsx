"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Share2, Linkedin, Users, Trophy } from "lucide-react"
import { getAssetPath } from "@/lib/assets"
import { useTranslation } from "@/hooks/use-translation"

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



const getImageSrc = (image: string | null) => {
  // Si hay imagen, usarla; si no, usar placeholder
  return image ? image : getAssetPath("placeholder-bg.svg")
}

export default function PrensaPage() {
  const { t } = useTranslation()
  
  const articles: Article[] = [
    {
      id: "1",
      title: `${t("press.article1Category")} ${t("press.article1Title")}`,
      excerpt: t("press.article1Content"),
      content: `🛠️ Nuestras hermanas mayores: las #tuneladoras del #Canal de la Mancha 🌊 

En 1988, comenzaron a excavar bajo el #Canal de la Mancha con una ambición que parecía imposible: unir #Inglaterra y #Francia con un túnel de 50,5 km, de los cuales 37,9 km estarían bajo el mar. Fue un reto de ingeniería tan grande que requirió 11 tuneladoras gigantes trabajando desde ambos lados, excavando roca y tiza con #precisión milimétrica.

En 1990, los equipos británicos y franceses se encontraron bajo el mar, con apenas 35 cm de desviación horizontal y 5 cm vertical después de kilómetros de perforación. Fue un momento #histórico que demostró que la ingeniería no solo resuelve problemas técnicos, sino que construye #puentes #invisibles entre países.

En 1994, el #Eurotúnel se inauguró oficialmente, transformando la forma de viajar y transportar mercancías en Europa. Lo que parecía una locura se convirtió en una realidad gracias a esas tuneladoras que, con su potencia silenciosa, crearon un camino subterráneo que cambió la historia.

En Talpa Tunneling UPV nos inspiran nuestras hermanas mayores, y ahora, con nuestra microtuneladora para la #NotABoringCompetition2026, seguimos su legado: construir, excavar y conectar.

Gracias a la Universitat Politècnica de València (UPV), a Generación Espontánea y a nuestras empresas patrocinadoras por apoyar la ingeniería joven en #Valencia. Cada metro excavado es un paso al futuro. Si ellas unieron países, nosotros unimos ideas e innovación para construir el próximo túnel. 🌍💥`,
      date: "2025-01-15",
      category: t("press.tecnologia"),
      readTime: `4 ${t("press.readTime")}`,
      image: "/eventos/1752147687873.jpg",
      author: "Talpa Tunneling UPV",
      linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_tuneladoras-canal-canal-activity-7349059833708408832-prV1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ6Rc4BMQQQSu5sMbGzGHvqN5_Ve9HYKxI",
      likes: 35,
      comments: 1
    },
    {
      id: "2",
      title: `${t("press.article2Category")} ${t("press.article2Title")}`,
      excerpt: t("press.article2Content"),
      content: `🎉 Hace justo una semana, vivimos una jornada de innovación, inspiración y colaboración junto a ISTOBAL Group. El pasado miércoles 25 de junio, Talpa Tunneling UPV tuvo el honor de participar en la V edición de los #UPV–ISTOBAL Event Series, una iniciativa que demuestra el firme compromiso de ISTOBAL Group con el desarrollo del talento joven y la innovación abierta 🚀

Queremos agradecer de forma muy especial a Pedro Fuentes y a todo el equipo de ISTOBAL Group por confiar en nosotros y brindarnos un espacio donde poder compartir el proyecto de Talpa Tunneling UPV con profesionales del sector, otros equipos universitarios y personas apasionadas por la ingeniería y el diseño.

Durante el evento, tuvimos el placer de compartir escenario con otros proyectos increíbles como Xtra2 y YUDesign UPV, así como con exposiciones realmente inspiradoras por parte de Nerea T., Jesús Alaba y Judit Oliver-Meseguer, PhD, que nos mostraron el potencial de la química y la ingeniería para construir soluciones sostenibles, eficientes y aplicables a la industria.

💡 Participar en este tipo de encuentros es una oportunidad única para aprender, conectar y seguir creciendo como equipo. Nos vamos con la motivación renovada y muchas ideas para el futuro.

Gracias por hacernos partícipes de un evento tan especial, y por seguir construyendo puentes entre la universidad, la industria y la innovación.`,
      date: "2025-01-02",
      category: t("press.evento"),
      readTime: `3 ${t("press.readTime")}`,
      image: "/eventos/21c6cb0f-f632-4f2a-8491-90163cb2dbfd.jpg",
      author: "Talpa Tunneling UPV",
      linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_upv-talpatunnelingupv-istobal-activity-7346205033991933952-nKW3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ6Rc4BMQQQSu5sMbGzGHvqN5_Ve9HYKxI",
      likes: 43,
      comments: 2
    },
    {
      id: "3",
      title: `${t("press.article3Category")} ${t("press.article3Title")}`,
      excerpt: t("press.article3Content"),
      content: `🚧 ¿Sabías que existen máquinas capaces de excavar #túneles del tamaño de una #autopista… bajo tierra? Las #tuneladoras (TBMs) son auténticos gigantes de la ingeniería del tamaño de #edificios de 5 plantas que #transforman ciudades desde el #subsuelo.

Decenas de metros bajo tierra, cortando el terreno como #gusanos #metálicos gigantes, trabajando años sin detenerse, hoy queremos compartir tres de las más #impresionantes de la historia 👇

🔵 Bertha (Seattle, EE. UU.)
📏 17,5 metros de diámetro
La más grande jamás utilizada en Estados Unidos. Excavó un túnel de casi 3 km bajo Seattle para una vía urbana de #alta #capacidad.

🟢 Martina (Italia)
📏 15,6 metros de diámetro
Diseñada para terrenos duros y condiciones extremas. Un referente europeo en #tecnología de #excavación.

🔴 Big Becky (Canadá)
📏 14,4 metros de diámetro
Trabajó en la construcción de túneles hidroeléctricos, demostrando la versatilidad de estas máquinas en proyectos de infraestructura crítica.

Estas máquinas nos inspiran a soñar en grande. En Talpa Tunneling UPV, trabajamos en una versión compacta pero igualmente innovadora para la #NotABoringCompetition2026. 

Nuestro enfoque: precisión, eficiencia y tecnología de vanguardia en formato micro. 🌍⚡`,
      date: "2024-12-25",
      category: t("press.tecnologia"),
      readTime: `4 ${t("press.readTime")}`,
      image: "/eventos/1750866188624.jpg",
      author: "Talpa Tunneling UPV",
      linkedinUrl: "https://www.linkedin.com/posts/talpa-tunneling-upv_taeqneles-autopista-tuneladoras-activity-7343956199094083586-H_fZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ6Rc4BMQQQSu5sMbGzGHvqN5_Ve9HYKxI",
      likes: 28,
      comments: 0
    }
  ]
  
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">{t("press.title")}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {t("press.subtitle")}
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
               asChild 
               className="bg-[#00338d] hover:bg-[#00338d]/80 border border-[#00338d] hover:border-[#00338d]/80 transition-all duration-200"
             >
               <a 
                 href="https://www.linkedin.com/company/talpa-tunneling-upv/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Linkedin className="h-4 w-4 mr-2" />
                 {t("press.followLinkedIn")}
               </a>
             </Button>
           </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {articles.map((article) => (
            <Card key={article.id} className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 group h-full flex flex-col">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={getImageSrc(article.image)}
                  alt={article.title}
                  className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-[#00338d]/90 text-white border-none">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="font-overpass text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#00338d] transition-colors">
                  {article.title}
                </h3>
                
                                 <p className="text-white/80 mb-1 line-clamp-2 flex-grow text-sm">
                   {article.excerpt}
                 </p>
                 
                 <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">{article.author}</span>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      {article.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {article.comments}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-[#00338d] hover:bg-[#0077B5]/80 border border-[#00338d] hover:border-[#00338d]/80 transition-all duration-200"
                    onClick={() => window.open(article.linkedinUrl, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
{t("press.viewOnLinkedIn")}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="px-3"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: article.title,
                          text: article.excerpt,
                          url: article.linkedinUrl
                        });
                      }
                    }}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
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
              <h2 className="font-overpass text-2xl font-bold mb-4">{t("press.stayUpdated")}</h2>
              <p className="text-white/80 mb-6">
                {t("press.followDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <Button 
                   asChild 
                   className="bg-[#00338d] hover:bg-[#00338d]/80 border border-[#00338d] hover:border-[#00338d]/80 transition-all duration-200"
                 >
                   <a 
                     href="https://www.linkedin.com/company/talpa-tunneling-upv/"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <Linkedin className="h-4 w-4 mr-2" />
                     {t("press.followLinkedIn")}
                   </a>
                 </Button>
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10 hover:border-white/50">
                  <a href="/contacto">
                    <span className="font-medium">{t("press.contactTeam")}</span>
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