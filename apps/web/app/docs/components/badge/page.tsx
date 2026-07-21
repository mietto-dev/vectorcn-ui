import { Metadata } from "next"
import { Badge } from "@workspace/ui/components/badge"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Badge",
  description: "A CRT/vector-display styled badge component.",
}

export default function BadgePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Badge</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled badge component with decorative sidecaps.
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      <InstallationCommands componentName="badge" />
    </div>
  )
}
