import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Avatar",
  description: "A CRT/vector-display styled avatar component.",
}
export default function AvatarPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Avatar</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled avatar component.
        </p>
      </div>

      <ComponentPreview name="avatar" />

      <InstallationCommands componentName="avatar" />
    </div>
  )
}
