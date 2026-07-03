import { Metadata } from "next"
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

      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <p className="text-sm text-muted-foreground">
          View the resizable component in action on the homepage.
        </p>
      </div>

      <InstallationCommands componentName="resizable" />
    </div>
  )
}
