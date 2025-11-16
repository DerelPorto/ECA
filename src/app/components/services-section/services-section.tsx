"use client";

import { useInView } from "@/app/hooks/use-in-view";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button/button";
import { motion } from "framer-motion";

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Building2,
      title: "Constitución de empresas",
      description:
        "Asesoría y gestión completa para la creación legal de tu empresa, incluyendo registro mercantil, RNC y estatutos.",
    },
    {
      icon: Calculator,
      title: "Igualas contables",
      description:
        "Planes mensuales de servicios contables adaptados al tamaño y necesidades de tu empresa.",
    },
    {
      icon: FileText,
      title: "Declaraciones fiscales",
      description:
        "Elaboración y presentación de declaraciones de impuestos (ITBIS, ISR, IR-3, IR-17, etc.) cumpliendo con normativas vigentes.",
    },
    {
      icon: ClipboardCheck,
      title: "Contabilidad general",
      description:
        "Registro, análisis y control de todas las operaciones contables de tu negocio.",
    },
    {
      icon: Users,
      title: "Gestión de nómina",
      description:
        "Cálculo y manejo de sueldos, beneficios laborales, TSS y reportes mensuales.",
    },
    {
      icon: TrendingUp,
      title: "Auditoría interna",
      description:
        "Revisión de procesos contables y administrativos para asegurar eficiencia y cumplimiento.",
    },
    {
      icon: Briefcase,
      title: "Asesoría financiera",
      description:
        "Orientación estratégica para mejorar la rentabilidad y sostenibilidad de tu empresa.",
    },
    {
      icon: FileCheck2,
      title: "Registro sanitario",
      description:
        "Elaboración, evaluación y preparación de expedientes para medicamentos, cosméticos y productos sanitarios.",
    },
    {
      icon: Shield,
      title: "Licencias y permisos",
      description:
        "Asesoría directa en licencias de operación, importación de productos y comercialización.",
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-36 relative bg-[#0A2342] overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#5A77A8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1a3a5f]/30 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[url('/patterns/dots-light.svg')] opacity-[0.10]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nuestros Servicios
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Soluciones integrales diseñadas para impulsar el crecimiento de tu
            empresa con confianza, orden y precisión.
          </p>

          {/* Divider line */}
          <div
            className={`w-28 h-1 bg-gradient-to-r from-[#5A77A8] to-[#DCE4F7] mx-auto mt-8 rounded-full transition-all duration-700 delay-300 ${
              isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <Card className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5A77A8] to-[#DCE4F7] flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#0A2342]" size={30} />
                  </div>

                  <CardHeader className="p-0">
                    <CardTitle className="text-white text-2xl font-semibold tracking-wide">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 mt-4">
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-black font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
