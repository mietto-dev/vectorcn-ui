import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Resizable",
  description: "A CRT/vector-display styled resizable component.",
}
export default function ResizablePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Resizable</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled resizable component.
        </p>
      </div>

      <ComponentPreview name="resizable" />

      <InstallationCommands componentName="resizable" />
    </div>
  )
}
