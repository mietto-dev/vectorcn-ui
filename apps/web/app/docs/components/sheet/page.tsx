import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Sheet",
  description: "A CRT/vector-display styled sheet component.",
}
export default function SheetPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Sheet</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled sheet component.
        </p>
      </div>

      <ComponentPreview name="sheet" />

      <InstallationCommands componentName="sheet" />
    </div>
  )
}
