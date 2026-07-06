import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Select",
  description: "A CRT/vector-display styled select component.",
}
export default function SelectPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Select</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled select component.
        </p>
      </div>

      <ComponentPreview name="select" />

      <InstallationCommands componentName="select" />
    </div>
  )
}
