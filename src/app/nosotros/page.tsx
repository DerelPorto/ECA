import { Header } from "@/app/components/Layout/header/header"
import { Footer } from "@/app/components/Layout/footer/footer"
import { CheckCircle2, Target, Eye, Heart } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/Card/card"

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
  ]

  return (
    <main className="min-h-screen bg-white bg-grid-pattern bg-noise">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A2342] mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-[#0A2342]/80 leading-relaxed">Conoce más sobre ACEL Finanzas Dominicanas SRL</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Quiénes Somos</h2>
              <p className="text-lg text-[#0A2342]/80 leading-relaxed mb-4">
                ACEL Finanzas Dominicanas SRL es una firma especializada en brindar soluciones contables integrales para
                pequeñas y medianas empresas. Nuestro objetivo es acompañar a los emprendedores desde la creación de su
                negocio hasta la gestión fiscal y financiera continua, ofreciendo tranquilidad, cumplimiento legal y
                crecimiento sostenible.
              </p>
              <p className="text-lg text-[#0A2342]/80 leading-relaxed">
                Nos destacamos por nuestra atención personalizada, ética profesional y compromiso con el éxito de
                nuestros clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="border-[#5A77A8]/20 bg-gradient-to-br from-[#5A77A8]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-[#5A77A8]" size={32} />
                    <h3 className="text-2xl font-bold text-[#0A2342]">Misión</h3>
                  </div>
                  <p className="text-[#0A2342]/80 leading-relaxed">
                    Brindar servicios contables, fiscales y administrativos de alta calidad a pequeñas y medianas
                    empresas, facilitando su cumplimiento legal, optimización financiera y desarrollo empresarial,
                    mediante un acompañamiento cercano, confiable y profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#5A77A8]/20 bg-gradient-to-br from-[#0A2342]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="text-[#5A77A8]" size={32} />
                    <h3 className="text-2xl font-bold text-[#0A2342]">Visión</h3>
                  </div>
                  <p className="text-[#0A2342]/80 leading-relaxed">
                    Ser la firma contable líder en apoyo a PYMEs en República Dominicana, reconocida por su excelencia,
                    innovación y compromiso con el crecimiento sostenible de sus clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-mesh-gradient-1">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-4">Nuestros Valores</h2>
              <p className="text-lg text-[#0A2342]/80">Los principios que guían nuestro trabajo diario</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card
                    key={value.title}
                    className="border-[#e8eaed] bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5A77A8] to-[#0A2342] flex items-center justify-center mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2342] mb-3">{value.title}</h3>
                      <p className="text-[#0A2342]/80 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
