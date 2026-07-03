import { Metadata } from "next"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Collapsible",
  description: "A CRT/vector-display styled collapsible component.",
}
export default function CollapsiblePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled collapsible component.
        </p>
      </div>

      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <p className="text-sm text-muted-foreground">
          View the collapsible component in action on the homepage.
        </p>
      </div>

      <InstallationCommands componentName="collapsible" />
    </div>
  )
}
