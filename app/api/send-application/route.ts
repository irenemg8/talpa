import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extraer datos del formulario
    const email = formData.get('email') as string
    const fullName = formData.get('fullName') as string
    const phone = formData.get('phone') as string
    const degree = formData.get('degree') as string
    const currentYear = formData.get('currentYear') as string
    const subsystemsString = formData.get('subsystems') as string
    const subsystems = subsystemsString ? JSON.parse(subsystemsString) : []
    const subsystemReason = formData.get('subsystemReason') as string
    const previousExperience = formData.get('previousExperience') as string
    const motivation = formData.get('motivation') as string
    const dataConsent = formData.get('dataConsent') as string
    const communicationsConsent = formData.get('communicationsConsent') as string
    const cvFile = formData.get('cv') as File | null

    // Verificar configuración de envío
    const isDevelopment = process.env.NODE_ENV === 'development'
    const forceRealEmail = process.env.FORCE_REAL_EMAIL === 'true'
    
    console.log('🔍 Configuración de envío:')
    console.log('  - NODE_ENV:', process.env.NODE_ENV)
    console.log('  - FORCE_REAL_EMAIL:', process.env.FORCE_REAL_EMAIL)
    console.log('  - isDevelopment:', isDevelopment)
    console.log('  - forceRealEmail:', forceRealEmail)
    
    // Cambiar a false para enviar emails reales siempre
    if (false && isDevelopment) {
      console.log('🚀 MODO DESARROLLO - Simulando envío de email')
      console.log('📧 Datos del formulario:', {
        fullName,
        email,
        phone,
        degree,
        currentYear,
        subsystems,
        subsystemReason: subsystemReason.substring(0, 50) + '...',
        previousExperience,
        motivation: motivation.substring(0, 50) + '...',
        dataConsent,
        communicationsConsent,
        hasCV: !!cvFile
      })
      
      // Simular un pequeño delay como si fuera real
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return NextResponse.json({ 
        message: 'Email simulado correctamente (modo desarrollo)',
        data: { fullName, email }
      }, { status: 200 })
    }

    console.log('✅ ENVIANDO EMAIL REAL')
    
    // Verificar configuración de email
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Configuración de email no encontrada')
    }

    // Configurar el transportador de correo (usando Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Crear el contenido del email
    const subsystemLabels: { [key: string]: string } = {
      partners: "Partners",
      marketing: "Marketing", 
      propulsion: "Propulsión",
      structural: "Diseño Estructural",
      cutting: "Corte y Excavación",
      ventilation: "Ventilación y Desescombro",
      terrain: "Terrenos",
      containment: "Contención",
      automation: "Automatización",
      electrical: "Sistemas Eléctricos"
    }

    const selectedSubsystemNames = subsystems.map((s: string) => subsystemLabels[s] || s).join(', ')

    const emailContent = `
    <h2>Nueva Solicitud de Inscripción - Talpa Tunneling UPV</h2>
    
    <h3>📋 Datos Personales</h3>
    <p><strong>Nombre completo:</strong> ${fullName}</p>
    <p><strong>Correo electrónico:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Grado/Máster:</strong> ${degree}</p>
    <p><strong>Curso:</strong> ${currentYear || 'No especificado'}</p>
    
    <h3>🔧 Subsistemas de Interés</h3>
    <p><strong>Subsistemas seleccionados:</strong> ${selectedSubsystemNames}</p>
    <p><strong>Razón de interés:</strong> ${subsystemReason}</p>
    
    <h3>💡 Experiencia y Motivación</h3>
    <p><strong>Experiencia previa en Generación Espontánea:</strong> ${previousExperience === 'yes' ? 'Sí' : 'No'}</p>
    <p><strong>Motivación:</strong> ${motivation}</p>
    
    <h3>✅ Consentimientos</h3>
    <p><strong>Consentimiento de datos:</strong> ${dataConsent === 'true' ? 'Aceptado' : 'No aceptado'}</p>
    <p><strong>Comunicaciones:</strong> ${communicationsConsent === 'true' ? 'Acepta recibir comunicaciones' : 'No desea recibir comunicaciones'}</p>
    
    <hr>
    <p><em>Solicitud enviada desde la web de Talpa Tunneling UPV</em></p>
    `

    // Configurar los adjuntos
    const attachments = []
    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type,
      })
    }

    // Configurar las opciones del email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'irenebati4@gmail.com',
      subject: `Nueva Solicitud de Inscripción - ${fullName}`,
      html: emailContent,
      attachments: attachments,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      message: 'Email enviado correctamente',
      data: { fullName, email }
    }, { status: 200 })
  } catch (error) {
    console.error('❌ Error enviando email:', error)
    
    // Proporcionar más detalles del error
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    
    return NextResponse.json({ 
      error: 'Error enviando email',
      details: errorMessage,
      suggestion: 'Verifica la configuración de las variables de entorno GMAIL_USER y GMAIL_APP_PASSWORD'
    }, { status: 500 })
  }
}
