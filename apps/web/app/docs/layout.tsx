import { DocsSidebar } from "@/components/docs-sidebar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative mx-auto flex w-full gap-4 p-4">
      <DocsSidebar />
      <div className="ml-10 max-w-full flex-1 px-4 py-4">{children}</div>
    </main>
  )
}
