"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/Layout/header/header";
import { Footer } from "@/app/components/Layout/footer/footer";
import { Card, CardContent } from "@/app/components/ui/Card/card";
import { Button } from "@/app/components/ui/Button/button";
import { Input } from "@/app/components/ui/Input/input";
import { Textarea } from "@/app/components/ui/TextTarea/textarea";
import { Mail, Phone, Instagram, Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
  ];

  return (
    <main className="min-h-screen bg-[#F3F5F9] relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 bg-gradient-to-b from-[#0A2342] to-[#13294B] text-white text-center relative"
      >
        <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-[0.07] bg-cover bg-center" />
        <div className="relative container mx-auto px-4 z-10">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a impulsar tu negocio
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-[0.05] bg-cover" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl font-bold text-[#0A2342] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Información de Contacto
              </h2>
              <p className="text-lg text-[#0A2342]/70 mb-8 leading-relaxed">
                Nuestro equipo está listo para atender tus consultas y brindarte
                la mejor asesoría para tu empresa.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/70 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5A77A8] to-[#0A2342] flex items-center justify-center">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div>
                            <p className="text-[#0A2342]/70 text-sm mb-1">
                              {info.title}
                            </p>
                            <p className="text-[#0A2342] font-medium">
                              {info.value}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 backdrop-blur-md border-none shadow-xl rounded-2xl">
                <CardContent className="p-8">
                  <h3
                    className="text-2xl font-bold text-[#0A2342] mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Envíanos un mensaje
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#0A2342] mb-2"
                      >
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="border-[#5A77A8] bg-white text-[#0A2342] placeholder-[#0A2342]/50 focus:border-[#0A2342]"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#0A2342] mb-2"
                      >
                        Correo Electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="border-[#5A77A8] bg-white text-[#0A2342] placeholder-[#0A2342]/50 focus:border-[#0A2342]"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#0A2342] mb-2"
                      >
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(809) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="border-[#5A77A8] bg-white text-[#0A2342] placeholder-[#0A2342]/50 focus:border-[#0A2342]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#0A2342] mb-2"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="border-[#5A77A8] bg-white text-[#0A2342] placeholder-[#0A2342]/50 focus:border-[#0A2342] min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#5A77A8] hover:bg-[#6D88C0] text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Enviar Mensaje <Send size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
