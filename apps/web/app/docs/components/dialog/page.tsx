import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Dialog",
  description: "A CRT/vector-display styled dialog component.",
}
export default function DialogPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Dialog</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled dialog component.
        </p>
      </div>

      <ComponentPreview name="dialog" />

      <InstallationCommands componentName="dialog" />
    </div>
  )
}
