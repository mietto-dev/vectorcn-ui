export function ComponentPreviewShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 border border-dashed p-6">
      <h2 className="text-sm text-muted-foreground">Preview</h2>
      {children}
    </div>
  )
}
