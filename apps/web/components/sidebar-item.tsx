"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"

interface SidebarItemProps {
  item: {
    title: string
    url: string
    new?: boolean
  }
}

export function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.url

  return (
    <Link
      href={item.url}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 text-sm transition-colors hover:text-foreground",
        isActive ? "font-medium text-foreground" : "text-muted-foreground"
      )}
    >
      <span>{item.title}</span>
      {item.new && (
        <span className="ml-auto text-[10px] font-bold tracking-wider text-primary uppercase">
          New
        </span>
      )}
    </Link>
  )
}
