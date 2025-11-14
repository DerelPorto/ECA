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
    <section id="servicios" ref={ref} className="py-32 bg-[#0A2342] relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nuestros Servicios
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Soluciones integrales diseñadas para satisfacer las necesidades específicas de tu empresa
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#1a3a5f] bg-white/5 backdrop-blur-sm overflow-hidden ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardHeader className="space-y-4 p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5A77A8] to-[#DCE4F7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="text-[#0A2342]" size={28} />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-gray-300 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Botón */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-br text-[#0A2342]  px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full shadow-lg"
          >
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
