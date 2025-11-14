"use client"

import { useInView } from "@/app/hooks/use-in-view"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const features = [
    "Integridad y transparencia",
    "Compromiso con tu éxito",
    "Confidencialidad garantizada",
    "Excelencia en cada servicio",
  ]

  return (
    <section id="nosotros" className="py-24 bg-mesh-gradient-1 relative" ref={ref}>
      <div className="absolute inset-0 bg-dots-pattern opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/business-team-meeting.jpg"
                alt="Equipo ACEL"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quiénes Somos
            </h2>
            <p className="text-lg text-[#0A2342]/80 mb-6 leading-relaxed">
              ACEL Finanzas Dominicanas SRL es una firma especializada en brindar soluciones contables integrales para
              pequeñas y medianas empresas.
            </p>
            <p className="text-lg text-[#0A2342]/80 mb-8 leading-relaxed">
              Nuestro objetivo es acompañar a los emprendedores desde la creación de su negocio hasta la gestión fiscal
              y financiera continua, ofreciendo tranquilidad, cumplimiento legal y crecimiento sostenible.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="text-[#5A77A8] flex-shrink-0" size={24} />
                  <span className="text-[#0A2342] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
