import { Metadata } from "next"

import { Button } from "@workspace/ui/components/button"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Button",
  description: "A CRT/vector-display styled button component.",
}

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled button component.
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">+</Button>
        </div>
      </div>

      <InstallationCommands componentName="button" />
    </div>
  )
}
