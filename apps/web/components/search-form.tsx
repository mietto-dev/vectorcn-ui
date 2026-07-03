"use client"

import { Search } from "lucide-react"
import { Input } from "@workspace/ui/components/input"

export function SearchForm() {
  return (
    <div className="relative">
      <Search className="absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search docs..." className="h-9 pl-8 text-sm" />
    </div>
  )
}
