import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Calendar",
  description: "A CRT/vector-display styled calendar component.",
}
export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled calendar component.
        </p>
      </div>

      <ComponentPreview name="calendar" />

      <InstallationCommands componentName="calendar" />
    </div>
  )
}
