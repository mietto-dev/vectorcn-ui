import { Metadata } from "next"

import { LoginForm } from "@/components/blocks/login-form"
import LoginPage from "../login/page"

export const metadata: Metadata = {
  title: "Building Retro Blocks for the Web",
  description:
    "Clean, retro building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.",
}

export default function BlocksPage() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-5 p-4 pt-10">
      <h1 className="font-mono text-2xl font-bold tracking-wider uppercase">
        Building Retro Blocks for the Web
      </h1>
      <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
        Clean, retro building blocks. Copy and paste into your apps. Works with
        all React frameworks. Open Source. Free forever.
      </p>

      <div className="flex min-h-[450px] flex-col gap-4 rounded-none border border-dashed p-4">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple login form
          </h2>
        </div>
        <div className="relative flex min-h-[400px] items-center justify-center">
          <LoginForm />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          A two column login page with a cover image.
        </h2>
      </div>
      <div className="relative flex min-h-[400px] items-center justify-center rounded-none border border-dashed">
        <div className="w-full">
          <LoginPage />
        </div>
      </div>
    </div>
  )
}
