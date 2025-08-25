import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Traducciones en español
const esTranslations = {
  navigation: {
    home: "Inicio",
    team: "Equipo", 
    tunneler: "Tuneladora",
    press: "Prensa",
    events: "Eventos",
    faq: "FAQ",
    contact: "Contacto",
    join: "Únete"
  },
  hero: {
    title: "Perforando el Futuro",
    subtitle: "Innovación en Tecnología de Tunelización",
    description: "Desarrollamos microtuneladoras de vanguardia que revolucionarán el transporte subterráneo. Somos Talpa Tunneling UPV.",
    joinTeam: "Únete al Equipo",
    exploreTunneler: "Explora la Tuneladora"
  },
  cta: {
    title: "¿Listo para Hacer Historia?",
    description: "Únete a nosotros en esta aventura subterránea. Buscamos estudiantes apasionados y empresas visionarias que quieran ser parte del futuro.",
    joinStudent: "Únete como Estudiante",
    collaborateCompany: "Colabora como Empresa"
  },
  about: {
    title: "Innovación Subterránea desde Valencia",
    description: "Somos un equipo de estudiantes apasionados por la ingeniería, unidos por el desafío de crear la próxima generación de tecnología de tunelización.",
    features: {
      innovation: {
        title: "Innovación",
        description: "Tecnología de vanguardia en microtuneladoras"
      },
      competition: {
        title: "Competición",
        description: "Participamos en la Not-a-Boring Competition"
      },
      team: {
        title: "Equipo",
        description: "Estudiantes multidisciplinares de la UPV"
      },
      sustainability: {
        title: "Sostenibilidad", 
        description: "Soluciones ecológicas para el transporte subterráneo"
      }
    }
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes alguna pregunta o quieres colaborar con nosotros?",
    getInTouch: "Ponte en Contacto",
    description: "Estamos aquí para responder tus preguntas y explorar oportunidades de colaboración. No dudes en contactarnos.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    subject: "Asunto",
    subjectPlaceholder: "¿En qué podemos ayudarte?",
    message: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    location: "Ubicación",
    phone: "Teléfono",
    socialMedia: "Síguenos"
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Encuentra respuestas a las preguntas más comunes sobre Talpa Tunneling UPV"
  },
  footer: {
    description: "Talpa Tunneling UPV es un equipo de estudiantes de la Universidad Politécnica de Valencia desarrollando tecnología innovadora de tunelización.",
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    followUs: "Síguenos",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
    cookies: "Política de Cookies"
  },
  press: {
    title: "Prensa y Medios",
    subtitle: "Mantente al día con nuestras últimas noticias, logros y apariciones en medios"
  },
  tunneler: {
    title: "Nuestra Tuneladora",
    subtitle: "Diseño Innovador para el Futuro",
    description: "Conoce los detalles técnicos y el diseño innovador de nuestra micro-tuneladora desarrollada para la Not-a-Boring Competition.",
    specifications: "Especificaciones Técnicas",
    design: "Diseño y Desarrollo",
    joinProject: "Únete al Proyecto",
    downloadDossier: "Descargar Dossier"
  },
  team: {
    title: "Nuestro Equipo",
    subtitle: "Conoce a los estudiantes que están revolucionando la tecnología de tunelización",
    joinCta: "¿Quieres formar parte del equipo?",
    joinDescription: "Estamos buscando estudiantes apasionados por la innovación y los retos técnicos. Únete a nosotros y ayuda a construir el futuro del transporte subterráneo.",
    joinButton: "Únete a Talpa Tunneling UPV"
  },
  events: {
    title: "Eventos y Actividades",
    subtitle: "Mantente al día con nuestras últimas actividades, presentaciones y logros",
    joinCta: "¿Quieres participar?",
    joinDescription: "Únete a nuestros eventos y forma parte de la revolución en tecnología de tunelización.",
    joinButton: "Únete al Equipo"
  },
  form: {
    personalData: "Datos Personales",
    fullName: "Nombre completo",
    fullNamePlaceholder: "Tu nombre completo",
    email: "Correo electrónico", 
    emailPlaceholder: "usuario@upv.es",
    phone: "Teléfono móvil",
    phonePlaceholder: "+34 600 000 000",
    degree: "¿A qué Grado/Máster perteneces?",
    degreePlaceholder: "Ej: Ingeniería Mecánica, Ingeniería Industrial...",
    currentYear: "¿En qué curso estás? (Opcional)",
    currentYearPlaceholder: "Selecciona tu curso",
    cv: "Adjunta tu CV (Opcional)",
    cvUpload: "Click para subir",
    cvDrag: "o arrastra tu CV",
    cvFormat: "PDF, DOC, DOCX (MAX. 10MB)",
    subsystems: "Subsistemas de Interés",
    subsystemsDescription: "Selecciona los subsistemas que más te interesen (máximo 3)",
    subsystemReason: "¿Por qué te interesan estos subsistemas?",
    subsystemReasonPlaceholder: "Explica tu motivación e interés por los subsistemas seleccionados...",
    experienceTitle: "Experiencia y Motivación",
    previousExperience: "¿Has formado anteriormente parte de Generación Espontánea o algún grupo similar?",
    motivation: "¿Qué te motiva a formar parte del equipo?",
    motivationPlaceholder: "Cuéntanos qué te impulsa a unirte a Talpa Tunneling UPV y qué esperas aportar al proyecto...",
    dataConsent: "Acepto el tratamiento de mis datos personales conforme a la normativa de protección de datos (GDPR)",
    communicationsConsent: "Deseo recibir comunicaciones sobre el proyecto y eventos relacionados",
    copyConsent: "Envíame una copia de mis respuestas",
    clearForm: "Borrar Formulario",
    submitForm: "Enviar Solicitud",
    submitting: "Enviando...",
    successTitle: "¡Formulario enviado correctamente!",
    successMessage: "Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.",
    errorTitle: "Error al enviar el formulario",
    validationMessage: "Completa todos los campos obligatorios (*) y acepta el tratamiento de datos para enviar la solicitud",
    required: "*",
    yes: "Sí",
    no: "No"
  }
}

// Traducciones en inglés
const enTranslations = {
  navigation: {
    home: "Home",
    team: "Team",
    tunneler: "Tunneler", 
    press: "Press",
    events: "Events",
    faq: "FAQ",
    contact: "Contact",
    join: "Join"
  },
  hero: {
    title: "Drilling the Future",
    subtitle: "Innovation in Tunneling Technology", 
    description: "We develop cutting-edge micro-tunnelers that will revolutionize underground transportation. We are Talpa Tunneling UPV.",
    joinTeam: "Join the Team",
    exploreTunneler: "Explore the Tunneler"
  },
  cta: {
    title: "Ready to Make History?",
    description: "Join us on this underground adventure. We are looking for passionate students and visionary companies who want to be part of the future.",
    joinStudent: "Join as Student", 
    collaborateCompany: "Collaborate as Company"
  },
  about: {
    title: "Underground Innovation from Valencia",
    description: "We are a team of students passionate about engineering, united by the challenge of creating the next generation of tunneling technology.",
    features: {
      innovation: {
        title: "Innovation",
        description: "Cutting-edge micro-tunneler technology"
      },
      competition: {
        title: "Competition",
        description: "We participate in the Not-a-Boring Competition"
      },
      team: {
        title: "Team",
        description: "Multidisciplinary students from UPV"
      },
      sustainability: {
        title: "Sustainability",
        description: "Ecological solutions for underground transportation"
      }
    }
  },
  contact: {
    title: "Contact",
    subtitle: "Do you have any questions or want to collaborate with us?",
    getInTouch: "Get in Touch",
    description: "We are here to answer your questions and explore collaboration opportunities. Don't hesitate to contact us.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email address",
    emailPlaceholder: "your@email.com",
    subject: "Subject",
    subjectPlaceholder: "How can we help you?",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    send: "Send Message",
    sending: "Sending...",
    location: "Location",
    phone: "Phone",
    socialMedia: "Follow Us"
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to the most common questions about Talpa Tunneling UPV"
  },
  footer: {
    description: "Talpa Tunneling UPV is a team of students from the Polytechnic University of Valencia developing innovative tunneling technology.",
    quickLinks: "Quick Links",
    contact: "Contact",
    followUs: "Follow Us",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Policy"
  },
  press: {
    title: "Press and Media",
    subtitle: "Stay up to date with our latest news, achievements and media appearances"
  },
  tunneler: {
    title: "Our Tunneler",
    subtitle: "Innovative Design for the Future", 
    description: "Learn about the technical details and innovative design of our micro-tunneler developed for the Not-a-Boring Competition.",
    specifications: "Technical Specifications",
    design: "Design and Development",
    joinProject: "Join the Project",
    downloadDossier: "Download Dossier"
  },
  team: {
    title: "Our Team",
    subtitle: "Meet the students who are revolutionizing tunneling technology",
    joinCta: "Want to be part of the team?",
    joinDescription: "We are looking for students passionate about innovation and technical challenges. Join us and help build the future of underground transportation.",
    joinButton: "Join Talpa Tunneling UPV"
  },
  events: {
    title: "Events and Activities", 
    subtitle: "Stay up to date with our latest activities, presentations and achievements",
    joinCta: "Want to participate?",
    joinDescription: "Join our events and be part of the revolution in tunneling technology. Stay informed about our upcoming activities.",
    joinButton: "Join the Team"
  },
  form: {
    personalData: "Personal Data",
    fullName: "Full name",
    fullNamePlaceholder: "Your full name",
    email: "Email address",
    emailPlaceholder: "user@upv.es", 
    phone: "Mobile phone",
    phonePlaceholder: "+34 600 000 000",
    degree: "What Degree/Master's do you belong to?",
    degreePlaceholder: "Ex: Mechanical Engineering, Industrial Engineering...",
    currentYear: "What year are you in? (Optional)",
    currentYearPlaceholder: "Select your year",
    cv: "Attach your CV (Optional)",
    cvUpload: "Click to upload",
    cvDrag: "or drag your CV",
    cvFormat: "PDF, DOC, DOCX (MAX. 10MB)",
    subsystems: "Subsystems of Interest",
    subsystemsDescription: "Select the subsystems that interest you most (maximum 3)",
    subsystemReason: "Why are you interested in these subsystems?",
    subsystemReasonPlaceholder: "Explain your motivation and interest in the selected subsystems...",
    experienceTitle: "Experience and Motivation",
    previousExperience: "Have you previously been part of Generación Espontánea or a similar group?",
    motivation: "What motivates you to be part of the team?",
    motivationPlaceholder: "Tell us what drives you to join Talpa Tunneling UPV and what you expect to contribute to the project...",
    dataConsent: "I accept the processing of my personal data in accordance with data protection regulations (GDPR)",
    communicationsConsent: "I wish to receive communications about the project and related events",
    copyConsent: "Send me a copy of my responses",
    clearForm: "Clear Form",
    submitForm: "Submit Application",
    submitting: "Sending...",
    successTitle: "Form sent successfully!",
    successMessage: "Your application has been sent successfully. We will contact you soon.",
    errorTitle: "Error sending form",
    validationMessage: "Complete all required fields (*) and accept data processing to submit the application",
    required: "*",
    yes: "Yes",
    no: "No"
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: esTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
