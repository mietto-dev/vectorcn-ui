"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

import { Button } from "@workspace/ui/components/button"

interface CopyCommandButtonProps {
  command: string
  copyCommand?: string
  className?: string
}

export default function CopyCommandButton({
  command,
  copyCommand,
  className,
}: CopyCommandButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(copyCommand || command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <Check className="mr-2 size-3" />
      ) : (
        <Copy className="mr-2 size-3" />
      )}
      {copied ? "Copied!" : command}
    </Button>
  )
}
