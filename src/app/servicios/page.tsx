import { Header } from "@/app/components/Layout/header/header"
import { Footer } from "@/app/components/Layout/footer/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/Card/card"
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
} from "lucide-react"
import { Button } from "@/app/components/ui/Button/button"
import Link from "next/link"

export default function ServiciosPage() {
  const services = [
    {
      icon: Building2,
      title: "Constitución de empresas",
      description:
        "Asesoría y gestión completa para la creación legal de tu empresa, incluyendo registro mercantil, RNC, estatutos y más.",
      features: ["Registro mercantil", "Obtención de RNC", "Redacción de estatutos", "Asesoría legal completa"],
    },
    {
      icon: Calculator,
      title: "Igualas contables",
      description: "Planes mensuales de servicios contables adaptados al tamaño y necesidades de tu empresa.",
      features: ["Planes personalizados", "Servicios mensuales", "Adaptados a tu empresa", "Soporte continuo"],
    },
    {
      icon: FileText,
      title: "Declaraciones fiscales",
      description:
        "Elaboración y presentación de declaraciones de impuestos (ITBIS, ISR, IR-3, IR-17, etc.) cumpliendo con los plazos y normativas vigentes.",
      features: ["ITBIS", "ISR", "IR-3 e IR-17", "Cumplimiento normativo"],
    },
    {
      icon: ClipboardCheck,
      title: "Contabilidad general",
      description: "Registro, análisis y control de todas las operaciones contables de tu negocio.",
      features: ["Registro de operaciones", "Análisis financiero", "Control contable", "Reportes detallados"],
    },
    {
      icon: Users,
      title: "Gestión de nómina",
      description: "Cálculo y manejo de sueldos, beneficios laborales, TSS y reportes mensuales.",
      features: ["Cálculo de sueldos", "Beneficios laborales", "Gestión TSS", "Reportes mensuales"],
    },
    {
      icon: TrendingUp,
      title: "Auditoría interna",
      description: "Revisión de procesos contables y administrativos para asegurar eficiencia y cumplimiento.",
      features: ["Revisión de procesos", "Auditoría administrativa", "Control de eficiencia", "Recomendaciones"],
    },
    {
      icon: Briefcase,
      title: "Asesoría Financiera",
      description: "Orientación estratégica para mejorar la rentabilidad y sostenibilidad de tu empresa.",
      features: ["Estrategia financiera", "Mejora de rentabilidad", "Sostenibilidad", "Planificación a largo plazo"],
    },
    {
      icon: FileCheck2,
      title: "Registro Sanitario",
      description:
        "Elaboración, evaluación y preparación de expedientes, medicamentos, cosméticos, productos de higiene y productos sanitarios.",
      features: ["Medicamentos", "Cosméticos", "Productos de higiene", "Productos sanitarios"],
    },
    {
      icon: Shield,
      title: "Licencias y permisos",
      description: "Asesoría directa en licencias de operación, importación de productos y comercialización.",
      features: ["Licencias de operación", "Permisos de importación", "Comercialización", "Asesoría legal"],
    },
  ]

  return (
    <main className="min-h-screen bg-white bg-grid-pattern bg-noise">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A2342] mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-[#0A2342]/80 leading-relaxed">
              Soluciones contables integrales diseñadas para el éxito de tu empresa
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className="border-[#e8eaed] bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5A77A8] to-[#0A2342] flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                      <CardTitle className="text-[#0A2342] text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-[#0A2342]/80 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-[#0A2342]/70 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#5A77A8]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2342] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales
            </p>
            <Button
              size="lg"
              className="bg-[#5A77A8] hover:bg-[#5A77A8]/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-full"
            //   asChild
            >
              <Link href="/contacto">Contáctanos ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
