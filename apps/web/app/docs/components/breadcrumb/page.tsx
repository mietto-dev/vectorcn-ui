import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Breadcrumb",
  description: "A CRT/vector-display styled breadcrumb component.",
}
export default function BreadcrumbPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Breadcrumb</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled breadcrumb component.
        </p>
      </div>

      <ComponentPreview name="breadcrumb" />

      <InstallationCommands componentName="breadcrumb" />
    </div>
  )
}
