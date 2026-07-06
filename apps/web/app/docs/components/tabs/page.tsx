import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Tabs",
  description: "A CRT/vector-display styled tabs component.",
}
export default function TabsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Tabs</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled tabs component.
        </p>
      </div>

      <ComponentPreview name="tabs" />

      <InstallationCommands componentName="tabs" />
    </div>
  )
}
