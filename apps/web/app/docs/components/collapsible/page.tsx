import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Collapsible",
  description: "A CRT/vector-display styled collapsible component.",
}
export default function CollapsiblePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled collapsible component.
        </p>
      </div>

      <ComponentPreview name="collapsible" />

      <InstallationCommands componentName="collapsible" />
    </div>
  )
}
