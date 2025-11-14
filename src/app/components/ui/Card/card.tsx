"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// 🔹 Componente principal Card
export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// 🔹 Contenido interno del Card
export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 flex flex-col gap-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// 🔹 Encabezado del Card
export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 border-b border-white/10", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// 🔹 Título del Card
export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-none tracking-tight text-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

// 🔹 Descripción o subtítulo del Card
export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-white/70", className)}
      {...props}
    >
      {children}
    </p>
  )
}
