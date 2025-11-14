import { Header } from "@/app/components/Layout/header/header"
import { HeroSection } from "@/app/components//hero-section/hero-section"
import { AboutSection } from "@/app/components/about-section/about-section"
import { ServicesSection } from "@/app/components/services-section/services-section"
import { TeamSection } from "@/app/components/team-section/team-section"
import { ContactSection } from "@/app/components/contact-section/contact-section"
import { Footer } from "@/app/components/Layout/footer/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white bg-grid-pattern bg-noise">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
