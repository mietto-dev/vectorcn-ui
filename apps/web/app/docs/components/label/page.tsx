import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Label",
  description: "A CRT/vector-display styled label component.",
}
export default function LabelPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Label</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled label component.
        </p>
      </div>

      <ComponentPreview name="label" />

      <InstallationCommands componentName="label" />
    </div>
  )
}
