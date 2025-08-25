import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-[#00338d] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-overpass font-bold text-xl">Talpa Tunneling UPV</span>
            </div>
            <p className="text-white/70 max-w-md">
              Equipo multidisciplinar de estudiantes de la UPV desarrollando microtuneladoras para la Not a
              Boring Competition.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.instagram.com/talpatunnelingupv/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#00338d] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/talpa-tunneling-upv" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#00338d] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:talpatunnelingupv@gmail.com"
                className="text-white/70 hover:text-[#00338d] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-overpass font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipo" className="text-white/70 hover:text-white transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/tuneladora" className="text-white/70 hover:text-white transition-colors">
                  Tuneladora
                </Link>
              </li>
              <li>
                <Link href="/prensa" className="text-white/70 hover:text-white transition-colors">
                  Prensa
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-white/70 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-overpass font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>Edificio 4Q (Talpa Tunneling UPV)</li>
              <li>Universidad Politécnica de Valencia</li>
              <li>Camino de Vera, s/n</li>
              <li>46022 Valencia, España</li>
              <li>talpatunnelingupv@gmail.com</li>

            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Talpa Tunneling UPV. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-white/70 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-white/70 hover:text-white text-sm transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
