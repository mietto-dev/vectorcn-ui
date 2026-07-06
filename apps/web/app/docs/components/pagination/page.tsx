import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Pagination",
  description: "A CRT/vector-display styled pagination component.",
}
export default function PaginationPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Pagination</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled pagination component.
        </p>
      </div>

      <ComponentPreview name="pagination" />

      <InstallationCommands componentName="pagination" />
    </div>
  )
}
