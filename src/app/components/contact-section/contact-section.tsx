"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/app/hooks/use-in-view"
import { Button } from "@/app/components/ui/Button/button"
import { Input } from "@/app/components/ui/Input/input"
import { Textarea } from "@/app/components/ui/TextTarea/textarea"
import { Card, CardContent } from "@/app/components/ui/Card/card"
import { Mail, Phone, Send, Instagram } from "lucide-react"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "829-708-4899",
      link: "https://wa.me/18297084899",
    },
    {
      icon: Mail,
      title: "Email",
      value: "acelfinanzassrl@gmail.com",
      link: "mailto:acelfinanzassrl@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@acelfinanzasdominicanas",
      link: "https://instagram.com/acelfinanzasdominicanas",
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-[#0A2342] text-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-mesh-gradient-3 opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contáctanos
          </h2>
          <p
            className={`text-lg text-white/80 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Estamos aquí para ayudarte a impulsar tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
              <p className="text-white/80 leading-relaxed">
                Nuestro equipo está listo para atender tus consultas y brindarte la mejor asesoría para tu empresa.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card
                    className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer ${
                      isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#5A77A8] flex items-center justify-center flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm mb-1">{info.title}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#5A77A8]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#5A77A8]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#5A77A8] min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#5A77A8] hover:bg-[#5A77A8]/90 text-white group transition-all duration-300 hover:scale-105"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
