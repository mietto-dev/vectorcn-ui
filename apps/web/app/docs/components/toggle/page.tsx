import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Toggle",
  description: "A CRT/vector-display styled toggle component.",
}
export default function TogglePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Toggle</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled toggle component.
        </p>
      </div>

      <ComponentPreview name="toggle" />

      <InstallationCommands componentName="toggle" />
    </div>
  )
}
