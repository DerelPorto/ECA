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

  const stats = [
    { number: "+120", label: "Empresas asesoradas" },
    { number: "8+", label: "Años de experiencia" },
    { number: "98%", label: "Clientes satisfechos" },
  ]

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-[#EFF3FA] to-[#DEE7F6] border-y border-white/40"
    >
      {/* Textured background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/patterns/dots.svg')] bg-repeat pointer-events-none" />

      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-20 w-36 h-36 bg-[#5A77A8]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-10 w-52 h-52 bg-[#0A2342]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* --- IMAGE AREA --- */}
          <div
            className={`transition-all duration-[1200ms] ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-14"
              }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/business-team-meeting.jpg"
                alt="Equipo ACEL"
                className="object-cover h-full w-full transition-all duration-[1400ms] group-hover:scale-110 group-hover:brightness-[1.15]"
              />

              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/60 to-transparent" />

              {/* Soft border highlight */}
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating image (optional) */}
            <div
              className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-2xl overflow-hidden shadow-xl hidden md:block transition-all duration-[1400ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <img
                src="/office-working.jpg"
                alt="Trabajo en equipo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* --- CONTENT AREA --- */}
          <div
            className={`transition-all duration-[1200ms] delay-200 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-14"
              }`}
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold text-[#0A2342] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quiénes Somos
            </h2>

            <p className="text-lg text-[#0A2342]/80 mb-5 leading-relaxed">
              Acel consulting SRL es una firma especializada en brindar
              soluciones contables integrales para pequeñas y medianas empresas.
            </p>

            <p className="text-lg text-[#0A2342]/80 mb-10 leading-relaxed">
              Nuestra misión es acompañar a los emprendedores desde su creación
              hasta su crecimiento sostenible, garantizando cumplimiento legal,
              tranquilidad financiera y excelencia profesional.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  style={{ transitionDelay: `${300 + index * 120}ms` }}
                  className={`flex items-center gap-3 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                >
                  <CheckCircle2 className="text-[#5A77A8]" size={26} />
                  <span className="text-[#0A2342] font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                  className={`text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <h3 className="text-3xl font-bold text-[#0A2342]">{stat.number}</h3>
                  <p className="text-[#0A2342]/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Misión / Visión Section --- */}
        <div
          className={`mt-24 grid md:grid-cols-3 gap-10 transition-all duration-[1200ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {[
            {
              title: "Nuestra Misión",
              text: "Brindar soluciones contables confiables e integrales que impulsen el crecimiento de las empresas dominicanas.",
            },
            {
              title: "Nuestra Visión",
              text: "Ser la firma contable líder en soporte empresarial y desarrollo financiero sostenible.",
            },
            {
              title: "Nuestros Valores",
              text: "Responsabilidad · Ética · Profesionalismo · Compromiso absoluto con el cliente.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30"
            >
              <h3
                className="text-2xl font-bold text-[#0A2342] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-[#0A2342]/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
