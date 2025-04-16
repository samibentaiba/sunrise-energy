import Link from "next/link"
import type { ReactNode } from "react"

interface PolicyLinkProps {
  href: string
  children: ReactNode
  external?: boolean
}

export default function PolicyLink({ href, children, external = false }: PolicyLinkProps) {
  return (
    <Link
      href={href}
      className="text-teal-600 hover:text-teal-800 transition-colors"
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </Link>
  )
}
