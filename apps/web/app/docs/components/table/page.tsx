import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Table",
  description: "A CRT/vector-display styled table component.",
}
export default function TablePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Table</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled table component.
        </p>
      </div>

      <ComponentPreview name="table" />

      <InstallationCommands componentName="table" />
    </div>
  )
}
