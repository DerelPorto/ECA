"use client"

import { useInView } from "@/app/hooks/use-in-view"
import { Card, CardContent } from "@/app/components/ui/Card/card"
import { Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const team = [
    {
      name: "María González",
      role: "Directora General",
      image: "/professional-woman-executive.png",
    },
    {
      name: "Carlos Rodríguez",
      role: "Contador Público",
      image: "/professional-accountant.png",
    },
    {
      name: "Ana Martínez",
      role: "Asesora Fiscal",
      image: "/professional-woman-consultant.png",
    },
    {
      name: "Luis Fernández",
      role: "Auditor Senior",
      image: "/professional-man-auditor.png",
    },
  ]

  return (
    <section
      id="equipo"
      ref={ref}
      className="py-28 relative overflow-hidden bg-gradient-to-br from-[#EFF3FA] via-[#E4EBF5] to-[#DCE4EF]"
    >
      {/* Textura de fondo */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-20" />
      <div className="absolute inset-0 bg-[url('/patterns/lines.svg')] opacity-10 mix-blend-soft-light" />

      {/* Contenido */}
      <div className="container mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#0A2342] mb-4 transition-all duration-[1200ms] ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestro Equipo
          </h2>

          <p
            className={`text-lg text-[#0A2342]/70 transition-all duration-[1200ms] delay-150 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Expertos dedicados a impulsar el crecimiento y la estabilidad financiera de tu empresa.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className={`relative group overflow-hidden transition-all duration-700 border border-[#C6C8CA]/40 rounded-2xl
                hover:shadow-[0_20px_40px_-10px_rgba(10,35,66,0.25)]
                hover:-translate-y-3 bg-white/70 backdrop-blur-sm
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cinta superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A77A8] to-[#0A2342]" />

              {/* Image */}
              <div className="relative overflow-hidden aspect-[1/1.1]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay con spotlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Social Icons */}
                <div className="absolute bottom-4 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Linkedin size={20} className="text-white" />
                  </a>

                  <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Mail size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0A2342] mb-1">{member.name}</h3>
                <p className="text-[#5A77A8] font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA final */}
        <div
          className={`text-center mt-20 transition-all duration-[1200ms] delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-[#0A2342]/70 text-lg mb-4">
            ¿Deseas trabajar con un equipo profesional y comprometido?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-[#0A2342] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#0A2342]/90 transition-all hover:scale-[1.03]"
          >
            Contáctanos
          </a>
        </div>

      </div>
    </section>
  )
}
