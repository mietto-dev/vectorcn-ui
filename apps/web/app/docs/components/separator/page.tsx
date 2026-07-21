import { Metadata } from "next"
import { Separator } from "@workspace/ui/components/separator"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Separator",
  description: "A CRT/vector-display styled separator component.",
}

export default function SeparatorPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Separator</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled separator component.
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <div className="flex w-full max-w-sm flex-col gap-4">
          <p className="text-sm">Content above separator</p>
          <Separator />
          <p className="text-sm">Content below separator</p>
          <Separator orientation="vertical" className="mx-auto h-10" />
        </div>
      </div>

      <InstallationCommands componentName="separator" />
    </div>
  )
}
