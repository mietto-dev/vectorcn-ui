"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { navItems } from "@/config/nav-items"

export function DocsSidebar() {
  return (
    <aside className="fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r border-dashed bg-background p-4">
      <nav className="flex flex-col gap-1">
        {navItems.navMain.map((group) => (
          <div key={group.title} className="mb-4">
            <h4 className="mb-2 text-xs tracking-wider uppercase text-muted-foreground">
              {group.title}
            </h4>
            {group.items.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="flex items-center gap-1 rounded-none px-3 py-1.5 text-sm tracking-wider uppercase text-foreground transition-colors hover:bg-muted"
              >
                <ChevronRight className="size-3 shrink-0 text-muted-foreground" />
                {item.title}
                {item.new && (
                  <span className="ml-auto text-[10px] text-accent-foreground">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
