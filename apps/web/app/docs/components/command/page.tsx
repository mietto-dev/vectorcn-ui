import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Command",
  description: "A CRT/vector-display styled command component.",
}
export default function CommandPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Command</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled command component.
        </p>
      </div>

      <ComponentPreview name="command" />

      <InstallationCommands componentName="command" />
    </div>
  )
}
