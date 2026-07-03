import { Metadata } from "next"
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

      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <p className="text-sm text-muted-foreground">
          View the popover component in action on the homepage.
        </p>
      </div>

      <InstallationCommands componentName="popover" />
    </div>
  )
}
