import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Combo Box",
  description: "A CRT/vector-display styled combo-box component.",
}

export default function ComboBoxPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Combo Box</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled combo-box component.
        </p>
      </div>

      <ComponentPreview name="combo-box" />

      <InstallationCommands componentName="combo-box" />
    </div>
  )
}
