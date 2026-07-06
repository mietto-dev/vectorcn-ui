import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Dropdown Menu",
  description: "A CRT/vector-display styled dropdown-menu component.",
}
export default function DropdownMenuPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Dropdown Menu</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled dropdown-menu component.
        </p>
      </div>

      <ComponentPreview name="dropdown-menu" />

      <InstallationCommands componentName="dropdown-menu" />
    </div>
  )
}
