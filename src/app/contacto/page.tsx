"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/app/components/Layout/header/header"
import { Footer } from "@/app/components/Layout/footer/footer"
import { Card, CardContent } from "@/app/components/ui/Card/card"
import { Button } from "@/app/components/ui/Button/button"
import { Input } from "@/app/components/ui/Input/input"
import { Textarea } from "@/app/components/ui/TextTarea/textarea"
import { Mail, Phone, Instagram, Send, MapPin } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    {
      icon: MapPin,
      title: "Ubicación",
      value: "República Dominicana",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-white bg-grid-pattern bg-noise">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A2342] mb-6">Contáctanos</h1>
            <p className="text-xl text-[#0A2342]/80 leading-relaxed">
              Estamos aquí para ayudarte a impulsar tu negocio
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Información de Contacto</h2>
                <p className="text-lg text-[#0A2342]/80 mb-8 leading-relaxed">
                  Nuestro equipo está listo para atender tus consultas y brindarte la mejor asesoría para tu empresa.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={info.title}
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        <Card className="border-[#e8eaed] bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                          <CardContent className="p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5A77A8] to-[#0A2342] flex items-center justify-center flex-shrink-0">
                              <Icon className="text-white" size={24} />
                            </div>
                            <div>
                              <p className="text-[#0A2342]/70 text-sm mb-1">{info.title}</p>
                              <p className="text-[#0A2342] font-medium">{info.value}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-[#e8eaed] shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#0A2342] mb-6">Envíanos un mensaje</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#0A2342] mb-2">
                          Nombre completo
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-[#e8eaed] focus:border-[#5A77A8]"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#0A2342] mb-2">
                          Correo Electrónico
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-[#e8eaed] focus:border-[#5A77A8]"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#0A2342] mb-2">
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(809) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-[#e8eaed] focus:border-[#5A77A8]"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#0A2342] mb-2">
                          Mensaje
                        </label>
                        <Textarea
                          id="message"
                          placeholder="¿En qué podemos ayudarte?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="border-[#e8eaed] focus:border-[#5A77A8] min-h-[150px]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#0A2342] hover:bg-[#1a3a5f] text-white group transition-all duration-300 hover:scale-105"
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
