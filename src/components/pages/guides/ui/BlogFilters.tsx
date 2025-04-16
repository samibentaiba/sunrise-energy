"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface BlogFiltersProps {
  filters: { label: string; filter: string }[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

const BlogFilters: React.FC<BlogFiltersProps> = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-4 border-b border-t border-white bg-gray-100">
      {filters.map((filter) => (
        <Button
          key={filter.filter}
          variant={activeFilter === filter.filter ? "default" : "outline"}
          onClick={() => setActiveFilter(filter.filter)}
          className={`rounded-none bg-transparent border-none h-9 ${
            activeFilter === filter.filter ? "text-orange-500" : "text-black hover:text-orange-500 hover:shadow-amber-300 "
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}

export default BlogFilters
