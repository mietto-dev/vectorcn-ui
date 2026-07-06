import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Progress",
  description: "A CRT/vector-display styled progress component.",
}
export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled progress component.
        </p>
      </div>

      <ComponentPreview name="progress" />

      <InstallationCommands componentName="progress" />
    </div>
  )
}
