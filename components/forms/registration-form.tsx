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
import { Upload, CheckCircle, AlertCircle, X, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FormData {
  email: string
  fullName: string
  phone: string
  degree: string
  currentYear?: string
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
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadError, setUploadError] = useState<string>("")
  const [submitError, setSubmitError] = useState<string>("")
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>()

  // Observar todos los campos para validar si el formulario está completo
  const watchedFields = watch()
  
  // Función para verificar si todos los campos obligatorios están completos
  const isFormValid = () => {
    const requiredFields = [
      watchedFields.fullName,
      watchedFields.email,
      watchedFields.phone,
      watchedFields.degree,
      watchedFields.subsystemReason,
      watchedFields.previousExperience,
      watchedFields.motivation
    ]
    
    // Verificar que todos los campos obligatorios estén llenos
    const allFieldsFilled = requiredFields.every(field => 
      field && field.toString().trim() !== ''
    )
    
    // Verificar que al menos un subsistema esté seleccionado
    const hasSubsystems = selectedSubsystems.length > 0
    
    // Verificar que el consentimiento de datos esté aceptado (más flexible)
    const hasDataConsent = Boolean(watchedFields.dataConsent)
    
    return allFieldsFilled && hasSubsystems && hasDataConsent
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setUploadError("")
    
    if (file) {
      // Validar tamaño del archivo (10MB máximo)
      if (file.size > 10 * 1024 * 1024) {
        setUploadError("El archivo es demasiado grande. Máximo 10MB.")
        return
      }
      
      // Validar tipo de archivo
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setUploadError("Tipo de archivo no permitido. Solo PDF, DOC y DOCX.")
        return
      }
      
      setUploadedFile(file)
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
    setUploadError("")
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess(false)

    try {
      // Preparar los datos del formulario
      const formData = new FormData()
      formData.append('email', data.email)
      formData.append('fullName', data.fullName)
      formData.append('phone', data.phone)
      formData.append('degree', data.degree)
      formData.append('currentYear', data.currentYear || '')
      formData.append('subsystems', JSON.stringify(selectedSubsystems))
      formData.append('subsystemReason', data.subsystemReason)
      formData.append('previousExperience', data.previousExperience)
      formData.append('motivation', data.motivation)
      formData.append('dataConsent', data.dataConsent.toString())
      formData.append('communicationsConsent', data.communicationsConsent.toString())
      
      if (uploadedFile) {
        formData.append('cv', uploadedFile)
      }

      // Enviar email usando un servicio de email
      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setIsSubmitted(true)
        // Limpiar el formulario después del éxito
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      } else {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `Error del servidor: ${response.status}`)
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
      setSubmitError(`No se pudo enviar el formulario: ${errorMessage}. Por favor, inténtalo de nuevo.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleSubsystem = (subsystem: string) => {
    setSelectedSubsystems((prev) =>
      prev.includes(subsystem) ? prev.filter((s) => s !== subsystem) : [...prev, subsystem],
    )
    // Limpiar mensajes de error cuando el usuario interactúa
    if (submitError) setSubmitError("")
  }

  // Función para limpiar mensajes cuando el usuario empieza a escribir
  const clearMessages = () => {
    if (submitError) setSubmitError("")
    if (submitSuccess) setSubmitSuccess(false)
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
              <Label htmlFor="fullName">Nombre completo *</Label>
              <Input
                id="fullName"
                placeholder="Tu nombre completo"
                className="bg-white/5 border-white/20 placeholder:text-gray-400"
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  // Permitir solo letras, espacios, acentos y caracteres especiales de nombres
                  target.value = target.value.replace(/[0-9]/g, '');
                  clearMessages();
                }}
                {...register("fullName", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/,
                    message: "El nombre solo puede contener letras y espacios"
                  }
                })}
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Correo electrónico *</Label>
              <Input
                id="email"
                type="email"
                placeholder="usuario@upv.es"
                className="bg-white/5 border-white/20 placeholder:text-gray-400"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Debe contener @ y un dominio válido (ej: usuario@upv.es)",
                  },
                  validate: (value) => {
                    if (!value.includes('@')) {
                      return "El email debe contener @";
                    }
                    const parts = value.split('@');
                    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
                      return "Formato de email inválido";
                    }
                    if (!parts[1].includes('.')) {
                      return "El dominio debe contener al menos un punto";
                    }
                    return true;
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="phone">Teléfono móvil *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+34 600 000 000"
                className="bg-white/5 border-white/20 placeholder:text-gray-400"
                maxLength={13}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  // Solo permitir números, + al inicio, y espacios para formato
                  let value = target.value.replace(/[^0-9+\s]/g, '');
                  
                  // Si empieza con +, asegurar que solo haya un + al inicio
                  if (value.includes('+')) {
                    const parts = value.split('+');
                    value = '+' + parts.slice(1).join('').replace(/\+/g, '');
                  }
                  
                  // Limitar longitud según formato español
                  if (value.startsWith('+34')) {
                    value = value.substring(0, 13); // +34 XXX XXX XXX
                  } else if (value.startsWith('34')) {
                    value = value.substring(0, 11); // 34 XXX XXX XXX
                  } else {
                    value = value.substring(0, 9); // XXX XXX XXX
                  }
                  
                  target.value = value;
                }}
                {...register("phone", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^(\+34\s?|34\s?)?[6789]\d{2}\s?\d{3}\s?\d{3}$|^(\+34|34)?[6789]\d{8}$/,
                    message: "Debe ser un móvil español válido (ej: +34 600 000 000 o 600000000)",
                  },
                  minLength: {
                    value: 9,
                    message: "Mínimo 9 dígitos"
                  }
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
              <Input
                id="degree"
                placeholder="Ej: Ingeniería Mecánica, Ingeniería Industrial..."
                className="bg-white/5 border-white/20 placeholder:text-gray-400"
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  // Permitir letras, espacios, acentos, guiones y algunos caracteres especiales comunes en nombres de carreras
                  target.value = target.value.replace(/[0-9]/g, '');
                }}
                {...register("degree", {
                  required: "El grado es obligatorio",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s\-'.,()]+$/,
                    message: "El nombre del grado solo puede contener letras, espacios y caracteres básicos"
                  }
                })}
              />
              {errors.degree && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.degree.message}
                </p>
              )}
            </div>

            <div>
            <Label htmlFor="currentYear">¿En qué curso estás? (Opcional)</Label>
            <Select onValueChange={(value) => setValue("currentYear", value)}>
              <SelectTrigger className="bg-white/5 border-white/20">
                <SelectValue placeholder="Selecciona tu curso" className="placeholder:text-gray-400" />
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
          </div>

         

          <div>
            <Label htmlFor="cv">Adjunta tu CV (Opcional)</Label>
            <div className="mt-2">
              {!uploadedFile ? (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/20 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-gray-400" />
                    <p className="mb-2 text-sm text-white/70">
                      <span className="font-semibold">Click para subir</span> o arrastra tu CV
                    </p>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX (MAX. 10MB)</p>
                  </div>
                  <input 
                    id="cv" 
                    type="file" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleFileUpload}
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{uploadedFile.name}</p>
                      <p className="text-xs text-gray-400">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
              {uploadError && (
                <p className="text-red-400 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {uploadError}
                </p>
              )}
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
              className="bg-white/5 border-white/20 mt-2 placeholder:text-gray-400"
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
              className="bg-white/5 border-white/20 mt-2 placeholder:text-gray-400"
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
        <Button 
          type="button" 
          variant="outline" 
          className="btn-secondary hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors" 
          onClick={() => window.location.reload()}
        >
          Borrar Formulario
        </Button>

        <Button 
          type="submit" 
          className="bg-white text-black hover:bg-gray-100 border-2 border-white font-semibold px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
          disabled={isSubmitting || !isFormValid()}
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </Button>
      </div>
      
      {/* Mensajes de estado */}
      {submitError && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <div className="flex items-center text-red-400">
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Error al enviar el formulario</h4>
              <p className="text-sm">{submitError}</p>
            </div>
          </div>
        </div>
      )}

      {submitSuccess && (
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">¡Formulario enviado correctamente!</h4>
              <p className="text-sm">Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.</p>
            </div>
          </div>
        </div>
      )}

      {!isFormValid() && !isSubmitting && !submitError && !submitSuccess && (
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            Completa todos los campos obligatorios (*) y acepta el tratamiento de datos para enviar la solicitud
          </p>
        </div>
      )}
    </form>
  )
}
