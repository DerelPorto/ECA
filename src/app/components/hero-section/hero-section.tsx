"use client"

import { useEffect, useState } from "react"
import { Button } from "@/app/components/ui/Button/button"
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`flex justify-center mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#5A77A8]/20 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#5A77A8] animate-pulse" />
              <span className="text-sm font-medium text-[#0A2342]">Soluciones Contables para PYMEs</span>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 transition-all duration-700 leading-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="gradient-text">Tu aliado contable</span>
            <br />
            <span className="text-[#0A2342]">desde el inicio</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-[#0A2342]/80 mb-12 leading-relaxed text-center max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Acompañamos a emprendedores y PYMEs desde la creación hasta el crecimiento sostenible
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="bg-[#0A2342] hover:bg-[#1a3a5f] text-white px-8 py-6 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-full"
              // asChild
            >
              <Link href="/contacto">
                Contáctanos
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 text-[#0A2342] px-8 py-6 text-lg transition-all duration-300 bg-[#0A2342] rounded-full  s:shadow-lg"
              // asChild
            >
              <Link href="/servicios">Nuestros Servicios</Link>
            </Button>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: TrendingUp, label: "Crecimiento Garantizado", value: "100%" },
              { icon: Shield, label: "Confianza y Seguridad", value: "24/7" },
              { icon: Users, label: "Clientes Satisfechos", value: "500+" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#e8eaed] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-[#5A77A8] mb-3" size={32} />
                  <div className="text-3xl font-bold text-[#0A2342] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#0A2342]/70 text-center">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
