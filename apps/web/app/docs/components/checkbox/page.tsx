import { Metadata } from "next"
import { Checkbox } from "@workspace/ui/components/vector/checkbox"
import { Label } from "@workspace/ui/components/vector/label"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Checkbox",
  description: "A CRT/vector-display styled checkbox component.",
}

export default function CheckboxPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Checkbox</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled checkbox component.
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>

      <InstallationCommands componentName="checkbox" />
    </div>
  )
}
