import { Metadata } from "next"

import { Input } from "@workspace/ui/components/vector/input"
import { Label } from "@workspace/ui/components/vector/label"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Input",
  description: "A CRT/vector-display styled input component.",
}

export default function InputPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Input</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled input component.
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-dashed p-6">
        <h2 className="text-sm text-muted-foreground">Preview</h2>
        <div className="grid w-full max-w-sm items-center gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled placeholder="Disabled input" />
          </div>
        </div>
      </div>

      <InstallationCommands componentName="input" />
    </div>
  )
}
