import type React from "react"
import { cn } from "@/lib/utils"

interface DashboardHeaderProps {
  heading: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function DashboardHeader({ heading, description, children, className }: DashboardHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between py-4", className)}>
      <div className="grid gap-1">
        <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl ">{heading}</h1>
        {description && <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
 