import { Metadata } from "next"
import { ComponentPreview } from "@/components/docs/component-preview"
import InstallationCommands from "../installation-commands"

export const metadata: Metadata = {
  title: "VectorCN Input OTP",
  description: "A CRT/vector-display styled input-otp component.",
}

export default function InputOtpPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Input OTP</h1>
        <p className="text-muted-foreground">
          A CRT/vector-display styled input-otp component.
        </p>
      </div>

      <ComponentPreview name="input-otp" />

      <InstallationCommands componentName="input-otp" />
    </div>
  )
}
