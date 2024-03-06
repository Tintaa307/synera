import { cn } from "@/lib/utils"
import React from "react"

type ButtonProps = {
  className?: string
  action?: () => void
  children?: React.ReactNode
}

const Button = ({ children, className, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={cn(
        "w-40 h-14 bg-[#090909] text-white/90 text-base font-semibold flex items-center justify-center gap-2 rounded-md border-[1px] border-white/20 hover:bg-[#0c0c0c] transition-all duration-150",
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
