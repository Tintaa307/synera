import { cn } from "@/lib/utils"
import React from "react"

type TitleProps = {
  title: string
  className?: string
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <small
      className={cn(
        "text-2xl font-bold text-transparent bg-clip-text bg-text-gradient user-select-none",
        className
      )}
    >
      {title}
    </small>
  )
}

export default Title
