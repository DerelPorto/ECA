"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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
      className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden bg-gradient-to-br from-[#E3EAF6] via-[#F5F7FA] to-white"
    >
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-20 w-80 h-80 rounded-full bg-[#5A77A8] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.3 }}
          className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-[#0A2342] blur-[90px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE CONTENT */}
          <div className="text-center md:text-left">

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-[#5A77A8]/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#5A77A8] animate-pulse" />
              <span className="text-sm font-medium text-[#0A2342]">
                Firma contable certificada en RD
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-[#0A2342] to-[#5A77A8] bg-clip-text text-transparent">
                Tu aliado contable
              </span>
              <br />
              <span className="text-[#0A2342]">desde el inicio</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg md:text-xl text-[#0A2342]/80 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Soluciones contables para emprendedores y PYMEs.
              Nos encargamos de tu crecimiento, tu tranquilidad financiera
              y tu cumplimiento legal.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-[#0A2342] hover:bg-[#1a3a5f] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/contacto" className="flex items-center gap-2">
                  Contáctanos
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-[#0A2342] hover:bg-[#1a3a5f] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/40">
              <img
                src="/office-meeting.jpg"
                alt="Equipo contable trabajando"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating small image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/calculator-desk.jpg"
                alt="Contabilidad"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20"
        >
          {[
            { icon: TrendingUp, label: "Empresas que crecieron con nosotros", value: "120+" },
            { icon: Shield, label: "Cumplimiento fiscal garantizado", value: "100%" },
            { icon: Users, label: "Clientes satisfechos", value: "500+" },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg  transition"
              >
                <Icon className="text-[#5A77A8] mb-3" size={34} />
                <div className="text-3xl font-bold text-[#0A2342]">{stat.value}</div>
                <div className="text-sm text-[#0A2342]/70 mt-1">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
