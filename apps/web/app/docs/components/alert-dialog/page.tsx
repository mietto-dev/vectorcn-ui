import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Alert Dialog",
  description: "A CRT/vector-display styled alert-dialog component.",
}
export default function AlertDialogPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Alert Dialog</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled alert-dialog component.
        </p>
      </div>

      <ComponentPreview name="alert-dialog" />

      <InstallationCommands componentName="alert-dialog" />
    </div>
  )
}
