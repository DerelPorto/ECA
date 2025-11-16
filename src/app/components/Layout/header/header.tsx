// "use client"

// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "Inicio", href: "/" },
//     { name: "Nosotros", href: "/nosotros" },
//     { name: "Servicios", href: "/servicios" },
//     { name: "Contacto", href: "/contacto" },
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled ? "glass shadow-xl border-b border-white/10" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <Link href="/" className="flex items-center space-x-3 group">
//             <div className="relative">
//               <div className="text-[#0A2342] font-bold text-3xl tracking-tight transition-all duration-300 group-hover:scale-105">
//                 ACEL
//               </div>
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#5A77A8] to-[#0A2342] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-full relative group ${
//                   pathname === item.href
//                     ? "text-[#5A77A8] bg-[#5A77A8]/10"
//                     : "text-[#0A2342] hover:text-[#5A77A8] hover:bg-[#5A77A8]/10"
//                 }`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-[#0A2342] p-2 hover:bg-[#5A77A8]/10 rounded-lg transition-colors"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <nav className="md:hidden py-4 space-y-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`block py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
//                   pathname === item.href
//                     ? "text-[#5A77A8] bg-[#5A77A8]/10"
//                     : "text-[#0A2342] hover:text-[#5A77A8] hover:bg-[#5A77A8]/10"
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Cambios automáticos al hacer scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cierra menú móvil cuando cambias de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${isScrolled ? "backdrop-blur-xl bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,.08)] border-b border-white/20" : "bg-transparent"}
        ${isScrolled ? "h-16" : "h-20"}
      `}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link href="/" className="group">
            <div className="relative">
              <span
                className="text-[#0A2342] font-extrabold text-3xl tracking-tight transition-transform duration-300 group-hover:scale-105"
              >
                ACEL
              </span>

              {/* Línea animada debajo del logo */}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#5A77A8] to-[#0A2342] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 
                    ${active
                      ? "text-[#0A2342] bg-[#5A77A8]/15"
                      : "text-[#0A2342]/80 hover:text-[#0A2342] hover:bg-[#5A77A8]/10"
                    }
                  `}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {item.name}

                  {/* Subrayado animado */}
                  <span
                    className={`
                      absolute bottom-1 left-4 right-4 h-0.5 bg-[#5A77A8] rounded-full transition-transform duration-300 origin-left
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Mobile Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-3 rounded-lg text-[#0A2342] hover:bg-[#5A77A8]/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`
            md:hidden transition-all duration-300 overflow-hidden
            ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col bg-white/90 rounded-xl backdrop-blur-lg border border-[#0A2342]/10 p-4 shadow-xl">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300
                    ${active
                      ? "text-[#0A2342] bg-[#5A77A8]/15"
                      : "text-[#0A2342] hover:bg-[#5A77A8]/10"
                    }
                  `}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
