import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Skeleton",
  description: "A CRT/vector-display styled skeleton component.",
}
export default function SkeletonPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Skeleton</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled skeleton component.
        </p>
      </div>

      <ComponentPreview name="skeleton" />

      <InstallationCommands componentName="skeleton" />
    </div>
  )
}
