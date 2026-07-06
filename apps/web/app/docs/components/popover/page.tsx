import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Popover",
  description: "A CRT/vector-display styled popover component.",
}
export default function PopoverPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Popover</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled popover component.
        </p>
      </div>

      <ComponentPreview name="popover" />

      <InstallationCommands componentName="popover" />
    </div>
  )
}
