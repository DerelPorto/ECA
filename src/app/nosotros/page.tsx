"use client";

import { Header } from "@/app/components/Layout/header/header";
import { Footer } from "@/app/components/Layout/footer/footer";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/Card/card";
import { motion } from "framer-motion";

export default function NosotrosPage() {
  const values = [
    {
      icon: Heart,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en cada proceso.",
    },
    {
      icon: Target,
      title: "Compromiso",
      description: "Nos involucramos con el éxito de cada cliente como si fuera propio.",
    },
    {
      icon: CheckCircle2,
      title: "Confidencialidad",
      description: "Protegemos la información de nuestros clientes con rigor y responsabilidad.",
    },
    {
      icon: Eye,
      title: "Excelencia",
      description: "Buscamos superar expectativas con soluciones eficientes y actualizadas.",
    },
    {
      icon: Heart,
      title: "Empatía",
      description: "Entendemos las necesidades únicas de cada empresa y ofrecemos atención personalizada.",
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
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Conoce más sobre ACEL Finanzas Dominicanas SRL y nuestra filosofía empresarial.
          </p>
        </div>
      </motion.section>

      {/* Quiénes Somos */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-[0.05] bg-cover" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold text-[#0A2342] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quiénes Somos
            </h2>
            <p className="text-lg text-[#0A2342]/70 leading-relaxed mb-4">
              ACEL Finanzas Dominicanas SRL es una firma especializada en brindar soluciones contables integrales para pequeñas y medianas empresas. 
              Nuestro objetivo es acompañar a los emprendedores desde la creación de su negocio hasta la gestión fiscal y financiera continua, ofreciendo tranquilidad, cumplimiento legal y crecimiento sostenible.
            </p>
            <p className="text-lg text-[#0A2342]/70 leading-relaxed">
              Nos destacamos por nuestra atención personalizada, ética profesional y compromiso con el éxito de nuestros clientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#2563EB]/10 text-[#0A2342] border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-[#5A77A8]" size={32} />
                    <h3 className="text-2xl font-bold">Misión</h3>
                  </div>
                  <p className="text-[#0A2342]/80 leading-relaxed">
                    Brindar servicios contables, fiscales y administrativos de alta calidad a pequeñas y medianas empresas, facilitando su cumplimiento legal, optimización financiera y desarrollo empresarial, mediante un acompañamiento cercano, confiable y profesional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#2563EB]/10 text-[#0A2342] border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="text-[#5A77A8]" size={32} />
                    <h3 className="text-2xl font-bold">Visión</h3>
                  </div>
                  <p className="text-[#0A2342]/80 leading-relaxed">
                    Ser la firma contable líder en apoyo a PYMEs en República Dominicana, reconocida por su excelencia, innovación y compromiso con el crecimiento sostenible de sus clientes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 relative bg-gradient-to-br from-[#EFF3FA] via-[#E4EBF5] to-[#DCE4EF]">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-20" />
        <div className="absolute inset-0 bg-[url('/patterns/lines.svg')] opacity-10 mix-blend-soft-light" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Nuestros Valores
            </h2>
            <p className="text-lg text-[#0A2342]/70">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/70 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5A77A8] to-[#0A2342] flex items-center justify-center mb-4 mx-auto">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2342] mb-2">{value.title}</h3>
                      <p className="text-[#0A2342]/80 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
