import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Radio Group",
  description: "A CRT/vector-display styled radio-group component.",
}
export default function RadioGroupPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Radio Group</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled radio-group component.
        </p>
      </div>

      <ComponentPreview name="radio-group" />

      <InstallationCommands componentName="radio-group" />
    </div>
  )
}
