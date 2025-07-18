import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "animate-pulse relative overflow-hidden",
        "before:absolute before:inset-0 before:-translate-x-full",
        "before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r",
        "before:from-transparent before:via-cartaai-white/10 before:to-transparent",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
