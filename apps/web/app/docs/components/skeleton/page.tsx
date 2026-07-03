import { Metadata } from "next"
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

      <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <p className="text-sm text-muted-foreground">
          View the skeleton component in action on the homepage.
        </p>
      </div>

      <InstallationCommands componentName="skeleton" />
    </div>
  )
}
