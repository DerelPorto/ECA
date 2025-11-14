// import type React from "react"
// import type { Metadata } from "next"
// import { Inter, Playfair_Display } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
// const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

// export const metadata: Metadata = {
//   title: "ECA Gestión Empresarial SRL - Soluciones Contables",
//   description: "Gestión contable y empresarial con excelencia. Soluciones confiables para tu negocio.",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="es">
//       <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }



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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
