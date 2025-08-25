import { RegistrationForm } from "@/components/forms/registration-form"
import { ReactBitsLanyard } from "@/components/ui/reactbits-lanyard"

export default function UnetePage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header con Lanyard */}
          <div className="text-center mb-12">
            <ReactBitsLanyard />

            <h1 className="font-overpass text-4xl font-bold mb-6 mt-8">Inscripción Talpa Tunneling UPV</h1>

            <div className="glass-card p-6 mb-8">
              <p className="text-lg text-white/90 leading-relaxed">
                ¡Hola a todos! Somos un equipo de Generación Espontánea formado por estudiantes de la UPV.
               Nuestro objetivo es diseñar una micro-tuneladora para la Not a Boring Competition. ¡Estamos
                deseando conocerte y poder crecer junto a ti! Si te gusta la innovación y los retos, no dudes en
                contactar con nosotros.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}
