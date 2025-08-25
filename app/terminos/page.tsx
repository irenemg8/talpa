import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle, Scale, Users, Globe, Shield } from "lucide-react"

export default function TerminosPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#00338d]/20 border border-[#00338d]/30">
              <FileText className="h-12 w-12 text-[#00338d]" />
            </div>
          </div>
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Términos y Condiciones</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estos términos regulan el uso del sitio web de Talpa Tunneling UPV y la participación en nuestro proyecto.
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/10 text-white/80">
              Última actualización: Enero 2025
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Aceptación de términos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Scale className="h-5 w-5 text-[#00338d]" />
                </div>
                Aceptación de los Términos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones de uso. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
              </p>
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-200 mb-2">Importante</h4>
                    <p className="text-amber-100/80 text-sm">
                      Estos términos pueden cambiar periódicamente. Es tu responsabilidad revisar estos términos 
                      regularmente para estar al tanto de cualquier modificación.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sobre Talpa Tunneling UPV */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Users className="h-5 w-5 text-[#00338d]" />
                </div>
                Sobre Talpa Tunneling UPV
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Naturaleza del Proyecto</h4>
                  <p className="text-white/80 text-sm">
                    Talpa Tunneling UPV es un grupo de Generación Espontánea de la Universidad Politécnica de Valencia 
                    que desarrolla una microtuneladora para participar en la Not a Boring Competition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Carácter Académico</h4>
                  <p className="text-white/80 text-sm">
                    Este es un proyecto académico y de investigación sin fines comerciales, desarrollado 
                    por estudiantes bajo supervisión universitaria.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uso del sitio web */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Globe className="h-5 w-5 text-[#00338d]" />
                </div>
                Uso del Sitio Web
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Usos Permitidos</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Consultar información sobre el proyecto y el equipo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Solicitar información de contacto y colaboración
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Aplicar para formar parte del equipo a través de los formularios oficiales
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Compartir contenido del sitio web con fines educativos o informativos
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Usos Prohibidos</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Uso comercial no autorizado del contenido o la marca
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Intentar acceder a áreas restringidas o realizar ingeniería inversa
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Enviar contenido malicioso, spam o información falsa
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Utilizar el sitio web para actividades ilegales o no éticas
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Propiedad intelectual */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Contenido del Sitio Web</h4>
                  <p className="text-white/80 text-sm">
                    Todo el contenido de este sitio web, incluyendo textos, imágenes, diseños, logos y código, 
                    es propiedad de Talpa Tunneling UPV y está protegido por las leyes de propiedad intelectual.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Uso de Marca</h4>
                  <p className="text-white/80 text-sm">
                    El nombre "Talpa Tunneling UPV", el logo y otros elementos de marca no pueden ser utilizados 
                    sin autorización expresa por escrito del equipo.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Contenido de Usuario</h4>
                  <p className="text-white/80 text-sm">
                    Al enviar información a través de nuestros formularios, concedes a Talpa Tunneling UPV 
                    el derecho a utilizar dicha información para los fines del proyecto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Participación en el equipo */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Participación en el Equipo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-3">Proceso de Selección</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      La selección de nuevos miembros se basa en criterios técnicos y de compatibilidad con el equipo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      No garantizamos la aceptación de todas las candidaturas recibidas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      El proceso de selección es interno y las decisiones son finales
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Compromisos de los Miembros</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Dedicación y compromiso con los objetivos del proyecto
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Respeto hacia otros miembros del equipo y colaboradores
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Confidencialidad sobre aspectos técnicos sensibles del proyecto
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Cumplimiento de las normas universitarias y del equipo
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitación de responsabilidad */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Shield className="h-5 w-5 text-[#00338d]" />
                </div>
                Limitación de Responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Disponibilidad del Servicio</h4>
                  <p className="text-white/80 text-sm">
                    No garantizamos que el sitio web esté disponible de forma ininterrumpida. Podemos realizar 
                    mantenimientos, actualizaciones o suspender el servicio temporalmente sin previo aviso.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Exactitud de la Información</h4>
                  <p className="text-white/80 text-sm">
                    Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos 
                    la exactitud, completitud o actualidad de todo el contenido del sitio web.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Enlaces Externos</h4>
                  <p className="text-white/80 text-sm">
                    Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables 
                    del contenido o las políticas de privacidad de dichos sitios externos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protección de datos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Protección de Datos Personales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                El tratamiento de datos personales se rige por nuestra 
                <a href="/privacidad" className="text-[#00338d] hover:text-[#00338d]/80 underline ml-1">
                  Política de Privacidad
                </a>
                , que forma parte integral de estos términos y condiciones.
              </p>
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-blue-100/80 text-sm">
                  Al utilizar este sitio web, también aceptas nuestra Política de Privacidad y el tratamiento 
                  de tus datos personales según se describe en la misma.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Modificaciones */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Modificaciones de los Términos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Notificación de Cambios</h4>
                <p className="text-white/80 text-sm">
                  Los cambios significativos se notificarán a través del sitio web y, cuando sea posible, 
                  por correo electrónico a los usuarios registrados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ley aplicable */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Ley Aplicable y Jurisdicción</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Ley Aplicable</h4>
                  <p className="text-white/80 text-sm">
                    Estos términos se rigen por la legislación española y, específicamente, 
                    por las normativas aplicables en la Comunidad Valenciana.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Jurisdicción</h4>
                  <p className="text-white/80 text-sm">
                    Para cualquier controversia que pudiera surgir, las partes se someten 
                    a la jurisdicción de los tribunales de Valencia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  Si tienes alguna pregunta sobre estos términos y condiciones, puedes contactarnos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-white/80">talpatunnelingupv@gmail.com</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Dirección</h4>
                    <p className="text-white/80 text-sm">
                      Edificio 4Q<br />
                      Universidad Politécnica de Valencia<br />
                      Camino de Vera, s/n<br />
                      46022 Valencia, España
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
