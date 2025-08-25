import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Database, Lock, Mail, Phone } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#00338d]/20 border border-[#00338d]/30">
              <Shield className="h-12 w-12 text-[#00338d]" />
            </div>
          </div>
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            En Talpa Tunneling UPV respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/10 text-white/80">
              Última actualización: Enero 2025
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Información del responsable */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Eye className="h-5 w-5 text-[#00338d]" />
                </div>
                Responsable del Tratamiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Organización</h4>
                  <p className="text-white/80">Talpa Tunneling UPV</p>
                  <p className="text-white/70 text-sm">Grupo de Generación Espontánea de la UPV</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Contacto</h4>
                  <p className="text-white/80 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    talpatunnelingupv@gmail.com
                  </p>
                  <p className="text-white/70 text-sm">Para consultas sobre privacidad y protección de datos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datos que recopilamos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Database className="h-5 w-5 text-[#00338d]" />
                </div>
                Información que Recopilamos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Datos de Contacto</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Nombre completo y apellidos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Dirección de correo electrónico
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Número de teléfono (opcional)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Universidad o institución académica
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Datos Académicos y Profesionales</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Titulación académica y año de estudios
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Experiencia previa relevante
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Habilidades técnicas y competencias
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Motivación para unirse al equipo
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Datos de Navegación</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Dirección IP y ubicación aproximada
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Tipo de navegador y dispositivo utilizado
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    Páginas visitadas y tiempo de permanencia
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Finalidad del tratamiento */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Lock className="h-5 w-5 text-[#00338d]" />
                </div>
                ¿Para qué Utilizamos tus Datos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Gestión de Candidaturas</h4>
                  <p className="text-white/80 text-sm">
                    Procesar las solicitudes de nuevos miembros, evaluar perfiles y comunicar decisiones.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Comunicación</h4>
                  <p className="text-white/80 text-sm">
                    Enviar información sobre el proyecto, eventos, noticias y oportunidades de participación.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Mejora del Sitio Web</h4>
                  <p className="text-white/80 text-sm">
                    Analizar el uso del sitio web para mejorar la experiencia de usuario y optimizar el contenido.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Cumplimiento Legal</h4>
                  <p className="text-white/80 text-sm">
                    Cumplir con obligaciones legales y normativas aplicables a nuestra actividad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Base legal */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Base Legal del Tratamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  El tratamiento de tus datos personales se basa en las siguientes bases legales:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1 font-bold">•</span>
                    <div>
                      <strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales y newsletters.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1 font-bold">•</span>
                    <div>
                      <strong>Interés legítimo:</strong> Para la gestión de candidaturas y mejora de nuestros servicios.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1 font-bold">•</span>
                    <div>
                      <strong>Cumplimiento legal:</strong> Para cumplir con obligaciones normativas aplicables.
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Derechos del usuario */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  Como titular de los datos, tienes los siguientes derechos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">Derecho de Acceso</h4>
                      <p className="text-white/70 text-xs">Conocer qué datos tenemos sobre ti</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">Derecho de Rectificación</h4>
                      <p className="text-white/70 text-xs">Corregir datos inexactos o incompletos</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">Derecho de Supresión</h4>
                      <p className="text-white/70 text-xs">Solicitar la eliminación de tus datos</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">Derecho de Portabilidad</h4>
                      <p className="text-white/70 text-xs">Recibir tus datos en formato estructurado</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">Derecho de Oposición</h4>
                      <p className="text-white/70 text-xs">Oponerte al tratamiento de tus datos</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">Derecho de Limitación</h4>
                      <p className="text-white/70 text-xs">Limitar el tratamiento en ciertas circunstancias</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Retención de datos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Conservación de los Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  Conservamos tus datos personales durante el tiempo necesario para las finalidades para las que fueron recopilados:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/80">Datos de candidaturas no seleccionadas</span>
                    <Badge variant="outline" className="border-[#00338d] text-[#00338d]">2 años</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/80">Datos de miembros activos</span>
                    <Badge variant="outline" className="border-[#00338d] text-[#00338d]">Durante la pertenencia + 1 año</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/80">Datos de navegación web</span>
                    <Badge variant="outline" className="border-[#00338d] text-[#00338d]">1 año</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Medidas de Seguridad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Cifrado de datos en tránsito y en reposo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Control de acceso basado en roles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Auditorías regulares de seguridad
                    </li>
                  </ul>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Copias de seguridad periódicas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Formación en protección de datos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      Protocolos de respuesta a incidentes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Contacto para Consultas sobre Privacidad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  Si tienes alguna pregunta sobre esta política de privacidad o quieres ejercer tus derechos, puedes contactarnos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </h4>
                    <p className="text-white/80">talpatunnelingupv@gmail.com</p>
                    <p className="text-white/70 text-sm">Respuesta en 48-72 horas</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Dirección Postal</h4>
                    <p className="text-white/80 text-sm">
                      Talpa Tunneling UPV<br />
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

          {/* Modificaciones */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Modificaciones de esta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. 
                Los cambios se publicarán en esta página y, si son significativos, te notificaremos por email. 
                Te recomendamos revisar periódicamente esta política para estar al tanto de cualquier cambio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
