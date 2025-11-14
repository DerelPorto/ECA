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
      image: "/professional-man-auditor.jpg",
    },
  ]

  return (
    <section id="equipo" className="py-24 bg-[#B0B3B8]/20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#0A2342] mb-4 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestro Equipo
          </h2>
          <p
            className={`text-lg text-[#0A2342]/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Profesionales comprometidos con tu éxito empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-[#C6C8CA]/30 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] via-[#0A2342]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin size={20} className="text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Mail size={20} className="text-white" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0A2342] mb-1">{member.name}</h3>
                <p className="text-[#5A77A8] font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
