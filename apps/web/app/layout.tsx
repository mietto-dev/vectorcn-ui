import type { Metadata } from "next"
import {
  vectorBattle,
  hershey,
  hersheyDuplex,
  simplex,
} from "@/config/fonts"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@workspace/ui/lib/utils"

export const metadata: Metadata = {
  title: {
    default: "Build your retro library — vectorcn/ui",
    template: "%s — vectorcn/ui",
  },
  description:
    "A collection of CRT/vector-display styled components for your next project.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        vectorBattle.variable,
        hershey.variable,
        hersheyDuplex.variable,
        simplex.variable,
        "antialiased"
      )}
    >
      <body>
        <ThemeProvider>
          <SiteHeader />
          <div className="mx-auto flex w-full max-w-[1400px] flex-1 border-r border-l border-dashed">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
