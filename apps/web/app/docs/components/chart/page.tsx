import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Chart",
  description: "A CRT/vector-display styled chart component.",
}

export default function ChartPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Chart</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled chart component.
        </p>
      </div>

      <ComponentPreview name="chart" />

      <InstallationCommands componentName="chart" />
    </div>
  )
}
