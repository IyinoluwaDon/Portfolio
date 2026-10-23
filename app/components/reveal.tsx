type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

// Keep the shared layout wrapper while rendering all content immediately.
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>
}
