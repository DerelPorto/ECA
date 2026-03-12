import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ECA Gestión Empresarial SRL - Soluciones Contables",
  description: "Gestión contable y empresarial con excelencia. Soluciones confiables para tu negocio.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Marca de agua global del proyecto */}
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
          style={{
            backgroundImage: "url('/Logo.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
            backgroundPosition: "center"
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
