"use client";

import type React from "react";
import { useState } from "react";
import { useInView } from "@/app/hooks/use-in-view";
import { Button } from "@/app/components/ui/Button/button";
import { Input } from "@/app/components/ui/Input/input";
import { Textarea } from "@/app/components/ui/TextTarea/textarea";
import { Card, CardContent } from "@/app/components/ui/Card/card";
import { Mail, Phone, Send, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
  ];

  return (
    <section
      id="contacto"
      className="py-32 relative overflow-hidden text-white bg-[#0A2342]"
      ref={ref}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-[#0F2D53] to-[#071A30] opacity-90" />
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[url('/patterns/lines.svg')] opacity-[0.04]" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#5A77A8]/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contáctanos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-lg text-gray-300"
          >
            Estamos aquí para ayudarte a impulsar tu negocio
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-28 h-1 bg-gradient-to-r from-[#5A77A8] to-[#DCE4F7] mt-6 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">Información de Contacto</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Nuestro equipo está listo para ayudarte con cualquier consulta y ofrecerte asesoría financiera profesional.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 rounded-xl cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5A77A8] to-[#DCE4F7] flex items-center justify-center shadow-md">
                        <Icon size={26} className="text-[#0A2342]" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">{info.title}</p>
                        <p className="text-white font-semibold text-lg">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5A77A8] rounded-lg"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5A77A8] rounded-lg"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5A77A8] min-h-[150px] rounded-lg"
                      required
                    />
                  </div>

                  {/* Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#5A77A8] to-[#DCE4F7] text-[#0A2342] font-semibold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2"
                  >
                    Enviar Mensaje
                    <Send size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
