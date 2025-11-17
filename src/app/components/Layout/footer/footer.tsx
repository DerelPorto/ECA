import { Instagram, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-[#0A2342] text-white pt-16 pb-10 overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A77A8] via-white/60 to-[#5A77A8]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div>
            <div className="mb-4">
              <div className="text-3xl font-extrabold tracking-wide">ACEL</div>
              <p className="text-white/70 text-sm">Finanzas Dominicanas SRL</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Soluciones contables confiables, transparentes y orientadas al crecimiento de tu negocio.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/contacto", label: "Contacto" }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 hover:pl-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://wa.me/18297084899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <Phone size={18} />
                  829-708-4899
                </a>
              </li>
              <li>
                <a
                  href="mailto:acelfinanzassrl@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <Mail size={18} />
                  acelfinanzassrl@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/acelfinanzasdominicanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <Instagram size={18} />
                  @acelconsultingsrl
                </a>
              </li>
            </ul>
          </div>

          {/* Dirección / Información adicional */}
          <div>
            <h3 className="font-bold text-lg mb-4">Oficina</h3>
            <p className="flex items-start gap-2 text-white/70 text-sm max-w-xs">
              <MapPin size={18} className="mt-1" />
              Santo Domingo, República Dominicana
            </p>
            <p className="text-white/50 text-xs mt-4 leading-relaxed">
              Atendemos a emprendedores, PYMEs y empresas en crecimiento brindando soluciones claras y eficientes.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ACEL Finanzas Dominicanas SRL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

