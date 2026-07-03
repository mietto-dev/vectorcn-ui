import { navItems } from "@/config/nav-items"
import { SidebarItem } from "@/components/sidebar-item"

export function AppSidebar() {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-dashed md:block">
      <nav className="px-2 py-4">
        {navItems.navMain.map((group) => (
          <div key={group.title} className="mb-4">
            <h3 className="mb-2 px-3 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {group.title}
            </h3>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <SidebarItem key={item.url} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
