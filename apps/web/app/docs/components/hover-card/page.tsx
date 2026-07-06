import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Hover Card",
  description: "A CRT/vector-display styled hover-card component.",
}
export default function HoverCardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Hover Card</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled hover-card component.
        </p>
      </div>

      <ComponentPreview name="hover-card" />

      <InstallationCommands componentName="hover-card" />
    </div>
  )
}
