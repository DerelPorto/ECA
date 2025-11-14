import { Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold">ACEL</div>
            </div>
            <p className="text-white/70 text-sm">Finanzas Dominicanas SRL</p>
            <p className="text-white/50 text-sm mt-2">Soluciones contables integrales para PYMEs</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-white/70 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/70 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/70 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/18297084899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  829-708-4899
                </a>
              </li>
              <li>
                <a
                  href="mailto:acelfinanzassrl@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  acelfinanzassrl@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/acelfinanzasdominicanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  @acelfinanzasdominicanas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} ACEL Finanzas Dominicanas SRL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
