"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FormData {
  email: string
  fullName: string
  phone: string
  degree: string
  currentYear?: string
  cv?: FileList
  subsystems: string[]
  subsystemReason: string
  previousExperience: string
  motivation: string
  dataConsent: boolean
  communicationsConsent: boolean
}

const subsystemOptions = [
  { value: "partners", label: "Partners", icon: "🤝" },
  { value: "marketing", label: "Marketing", icon: "📱" },
  { value: "propulsion", label: "Propulsión", icon: "⚡" },
  { value: "structural", label: "Diseño Estructural", icon: "🏗️" },
  { value: "cutting", label: "Corte y Excavación", icon: "⛏️" },
  { value: "ventilation", label: "Ventilación y Desescombro", icon: "💨" },
  { value: "terrain", label: "Terrenos", icon: "🌍" },
  { value: "containment", label: "Contención", icon: "🛡️" },
  { value: "automation", label: "Automatización", icon: "🤖" },
  { value: "electrical", label: "Sistemas Eléctricos", icon: "⚡" },
]

export function RegistrationForm() {
  const [selectedSubsystems, setSelectedSubsystems] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", { ...data, subsystems: selectedSubsystems })
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const toggleSubsystem = (subsystem: string) => {
    setSelectedSubsystems((prev) =>
      prev.includes(subsystem) ? prev.filter((s) => s !== subsystem) : [...prev, subsystem],
    )
  }

  if (isSubmitted) {
    return (
      <Card className="glass-card border-green-500/50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="font-overpass text-2xl font-bold mb-4">¡Solicitud Enviada!</h2>
          <p className="text-white/80 mb-6">
            Gracias por tu interés en unirte a Talpa Tunneling UPV. Hemos recibido tu solicitud y nos pondremos en contacto
            contigo pronto.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Enviar Otra Solicitud
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Datos Personales */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="font-overpass text-xl">Datos Personales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">Correo electrónico *</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu.email@upv.es"
                className="bg-white/5 border-white/20"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="fullName">Nombre completo *</Label>
              <Input
                id="fullName"
                placeholder="Tu nombre completo"
                className="bg-white/5 border-white/20"
                {...register("fullName", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fullName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Teléfono móvil *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+34 600 000 000"
                className="bg-white/5 border-white/20"
                {...register("phone", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^(\+34|0034|34)?[6789]\d{8}$/,
                    message: "Formato de teléfono inválido",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="degree">¿A qué Grado/Máster perteneces? *</Label>
              <Select onValueChange={(value) => setValue("degree", value)}>
                <SelectTrigger className="bg-white/5 border-white/20">
                  <SelectValue placeholder="Selecciona tu titulación" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="ing-mecanica">Ingeniería Mecánica</SelectItem>
                  <SelectItem value="ing-industrial">Ingeniería Industrial</SelectItem>
                  <SelectItem value="ing-informatica">Ingeniería Informática</SelectItem>
                  <SelectItem value="ing-telecomunicaciones">Ingeniería de Telecomunicaciones</SelectItem>
                  <SelectItem value="ing-civil">Ingeniería Civil</SelectItem>
                  <SelectItem value="ing-aeroespacial">Ingeniería Aeroespacial</SelectItem>
                  <SelectItem value="ing-energia">Ingeniería de la Energía</SelectItem>
                  <SelectItem value="ing-materiales">Ingeniería de Materiales</SelectItem>
                  <SelectItem value="ing-diseno">Ingeniería de Diseño Industrial</SelectItem>
                  <SelectItem value="otros">Otros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="currentYear">¿En qué curso estás? (Opcional)</Label>
            <Select onValueChange={(value) => setValue("currentYear", value)}>
              <SelectTrigger className="bg-white/5 border-white/20">
                <SelectValue placeholder="Selecciona tu curso" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20">
                <SelectItem value="1">1º Curso</SelectItem>
                <SelectItem value="2">2º Curso</SelectItem>
                <SelectItem value="3">3º Curso</SelectItem>
                <SelectItem value="4">4º Curso</SelectItem>
                <SelectItem value="master">Máster</SelectItem>
                <SelectItem value="doctorado">Doctorado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="cv">Adjunta tu CV (Opcional)</Label>
            <div className="mt-2">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/20 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-white/50" />
                  <p className="mb-2 text-sm text-white/70">
                    <span className="font-semibold">Click para subir</span> o arrastra tu CV
                  </p>
                  <p className="text-xs text-white/50">PDF, DOC (MAX. 10MB)</p>
                </div>
                <input id="cv" type="file" className="hidden" accept=".pdf,.doc,.docx" {...register("cv")} />
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subsistemas */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="font-overpass text-xl">Subsistemas de Interés</CardTitle>
          <p className="text-white/70">Selecciona los subsistemas que más te interesen (máximo 3)</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subsystemOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => toggleSubsystem(option.value)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedSubsystems.includes(option.value)
                    ? "border-[#00338d] bg-[#00338d]/20"
                    : "border-white/20 bg-white/5 hover:border-white/40"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h3 className="font-semibold">{option.label}</h3>
                    {selectedSubsystems.includes(option.value) && (
                      <Badge className="mt-1 bg-[#00338d] text-white">Seleccionado</Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Label htmlFor="subsystemReason">¿Por qué te interesan estos subsistemas? *</Label>
            <Textarea
              id="subsystemReason"
              placeholder="Explica tu motivación e interés por los subsistemas seleccionados..."
              className="bg-white/5 border-white/20 mt-2"
              rows={4}
              {...register("subsystemReason", {
                required: "Este campo es obligatorio",
                minLength: { value: 50, message: "Mínimo 50 caracteres" },
              })}
            />
            {errors.subsystemReason && (
              <p className="text-red-400 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.subsystemReason.message}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Experiencia y Motivación */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="font-overpass text-xl">Experiencia y Motivación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>¿Has formado anteriormente parte de Generación Espontánea o algún grupo similar? *</Label>
            <RadioGroup className="mt-2" onValueChange={(value) => setValue("previousExperience", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="exp-yes" />
                <Label htmlFor="exp-yes">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="exp-no" />
                <Label htmlFor="exp-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="motivation">¿Qué te motiva a formar parte del equipo? *</Label>
            <Textarea
              id="motivation"
              placeholder="Cuéntanos qué te impulsa a unirte a Talpa Tunneling UPV y qué esperas aportar al proyecto..."
              className="bg-white/5 border-white/20 mt-2"
              rows={5}
              {...register("motivation", {
                required: "Este campo es obligatorio",
                minLength: { value: 100, message: "Mínimo 100 caracteres" },
              })}
            />
            {errors.motivation && (
              <p className="text-red-400 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.motivation.message}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Consentimientos */}
      <Card className="glass-card border-white/10">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="dataConsent"
              {...register("dataConsent", { required: "Debes aceptar el tratamiento de datos" })}
            />
            <Label htmlFor="dataConsent" className="text-sm leading-relaxed">
              Acepto el tratamiento de mis datos personales conforme a la normativa de protección de datos (GDPR) *
            </Label>
          </div>
          {errors.dataConsent && (
            <p className="text-red-400 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.dataConsent.message}
            </p>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox id="communicationsConsent" {...register("communicationsConsent")} />
            <Label htmlFor="communicationsConsent" className="text-sm leading-relaxed">
              Deseo recibir comunicaciones sobre el proyecto y eventos relacionados
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="copyConsent" />
            <Label htmlFor="copyConsent" className="text-sm leading-relaxed">
              Envíame una copia de mis respuestas
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button type="button" variant="outline" className="btn-secondary" onClick={() => window.location.reload()}>
          Borrar Formulario
        </Button>

        <Button type="submit" className="btn-primary" disabled={isSubmitting || selectedSubsystems.length === 0}>
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </Button>
      </div>
    </form>
  )
}
