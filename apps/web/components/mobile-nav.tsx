"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { navItems } from "@/config/nav-items"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        <Menu className="size-4" />
      </Button>
      {open && (
        <div className="absolute top-full left-0 z-50 mt-2 w-48 rounded-none border bg-background p-2 shadow-lg">
          {navItems.header.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="block px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
