"use client"

import Link from "next/link"
import React, { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

type ItemProps = {
  url: string
  title: string
  className?: string
  action?: () => void
}

const Item = ({ title, url, className, action }: ItemProps) => {
  const { scrollY } = useScroll()
  const [scroll, setScroll] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest)
  })
  return (
    <li className="group">
      <Link
        onClick={action}
        className={cn(
          "text-white/80 text-lg font-medium cursor-pointer group-hover:text-primary transition-colors duration-150 flex items-center justify-center flex-col gap-4",
          {
            "text-primary":
              (title === "Servicios" && scroll > 800 && scroll < 1400) ||
              (title === "Proyectos" && scroll > 1400 && scroll < 2300) ||
              (title === "Nosotros" && scroll > 2700 && scroll < 3400) ||
              (title === "Contacto" && scroll > 3400 && scroll < 4500)
          },
          className
        )}
        href={url}
      >
        {title}
        <div
          className={cn(
            "md:block md:w-[400px] md:h-[1px] md:bg-white/10 xs:md:w-[330px] hidden"
          )}
        />
      </Link>
    </li>
  )
}

export default Item
