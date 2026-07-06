import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Textarea",
  description: "A CRT/vector-display styled textarea component.",
}
export default function TextareaPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Textarea</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled textarea component.
        </p>
      </div>

      <ComponentPreview name="textarea" />

      <InstallationCommands componentName="textarea" />
    </div>
  )
}
