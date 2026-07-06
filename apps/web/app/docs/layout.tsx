import { DocsSidebar } from "@/components/docs-sidebar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex w-full gap-4 p-4 pl-64">
      <DocsSidebar />
      <div className="max-w-full flex-1 px-4 py-4">{children}</div>
    </main>
  )
}
