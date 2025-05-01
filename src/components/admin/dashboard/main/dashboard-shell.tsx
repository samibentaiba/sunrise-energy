import type React from "react"
import { cn } from "@/lib/utils"

export function DashboardShell({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      {children}
    </div>
  )
}
