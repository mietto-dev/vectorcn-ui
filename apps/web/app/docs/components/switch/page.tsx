import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Switch",
  description: "A CRT/vector-display styled switch component.",
}
export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Switch</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled switch component.
        </p>
      </div>

      <ComponentPreview name="switch" />

      <InstallationCommands componentName="switch" />
    </div>
  )
}
