"use client";

import { Header } from "@/app/components/Layout/header/header";
import { Footer } from "@/app/components/Layout/footer/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/Card/card";

import {
  Building2,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  ClipboardCheck,
  Briefcase,
  FileCheck2,
  Shield,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/app/components/ui/Button/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiciosPage() {
  const services = [
    {
      icon: Building2,
      title: "Constitución de empresas",
      description: "Asesoría y gestión completa para constituir tu empresa.",
      features: [
        "Registro mercantil",
        "Obtención de RNC",
        "Redacción de estatutos",
        "Asesoría legal completa",
      ],
    },
    {
      icon: Calculator,
      title: "Igualas contables",
      description: "Planes contables mensuales adaptados a tu empresa.",
      features: [
        "Planes personalizados",
        "Servicios mensuales",
        "Soporte continuo",
      ],
    },
    {
      icon: FileText,
      title: "Declaraciones fiscales",
      description: "Presentación de ITBIS, ISR, IR-3, IR-17 y más.",
      features: ["ITBIS", "ISR", "Cumplimiento normativo"],
    },
    {
      icon: ClipboardCheck,
      title: "Contabilidad general",
      description: "Registro, análisis y control de operaciones contables.",
      features: ["Análisis financiero", "Reportes detallados"],
    },
    {
      icon: Users,
      title: "Gestión de nómina",
      description: "Cálculo de sueldos, beneficios y reportes TSS.",
      features: ["Cálculo de sueldos", "Beneficios laborales", "Gestión TSS"],
    },
    {
      icon: TrendingUp,
      title: "Auditoría interna",
      description: "Evaluación de procesos contables y administrativos.",
      features: ["Revisión de procesos", "Control de eficiencia"],
    },
    {
      icon: Briefcase,
      title: "Asesoría financiera",
      description: "Estrategia para rentabilidad y sostenibilidad.",
      features: ["Planificación financiera", "Análisis estratégico"],
    },
    {
      icon: FileCheck2,
      title: "Registro Sanitario",
      description: "Gestión de expedientes sanitarios.",
      features: ["Medicamentos", "Cosméticos", "Productos sanitarios"],
    },
    {
      icon: Shield,
      title: "Licencias y permisos",
      description: "Asesoría en permisos de importación y operación.",
      features: ["Licencias comerciales", "Permisos de importación"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F5F9] text-base relative overflow-hidden">
      <Header />

      {/* HERO */}
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
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Soluciones contables, fiscales y financieras diseñadas para el
            crecimiento estructurado de tu empresa.
          </p>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-[0.05] bg-cover" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-14"
          >
            <h2
              className="text-4xl font-bold text-[#0A2342] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Servicios que ofrecemos
            </h2>
            <p className="text-lg text-[#0A2342]/70">
              Asesoría integral para cada etapa del desarrollo empresarial
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                    <CardHeader className="pb-3 text-center">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mx-auto w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 shadow-inner"
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-white/95 text-sm"
                          >
                            <CheckCircle2 size={16} className="mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-[#0A2342] to-[#13294B] text-white text-center relative"
      >
        <div className="absolute inset-0 bg-[url('/mesh-bg.svg')] opacity-[0.07] bg-cover bg-center" />
        <div className="relative container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Contáctanos hoy y descubre cómo podemos impulsar tu empresa hacia su
            mejor versión.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              className="bg-[#5A77A8] hover:bg-[#6D88C0] text-white px-8 py-4 text-lg rounded-full"
            >
              <Link href="/contacto">Contáctanos ahora</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
