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
              (title === "Services" && scroll > 800 && scroll < 1900) ||
              (title === "Servicios" && scroll > 800 && scroll < 1900) ||
              (title === "Last Jobs" && scroll > 1900 && scroll < 2700) ||
              (title === "Proyectos" && scroll > 1900 && scroll < 2700) ||
              (title === "About us" && scroll > 2700 && scroll < 3700) ||
              (title === "Nosotros" && scroll > 2700 && scroll < 3700) ||
              (title === "Testimonials" && scroll > 3700 && scroll < 4500) ||
              (title === "Testimonios" && scroll > 3700 && scroll < 4500) ||
              (title === "Contact" && scroll > 3700) ||
              (title === "Contacto" && scroll > 3700),
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
