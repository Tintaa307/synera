"use client"

import Link from "next/link"
import React, { useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

type ItemProps = {
  url: string
  title: string
}

const Item = ({ title, url }: ItemProps) => {
  const { scrollY } = useScroll()
  const [scroll, setScroll] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    setScroll(latest)
  })
  return (
    <li className="group">
      <Link
        className={cn(
          "text-white/80 text-lg font-medium cursor-pointer group-hover:text-primary transition-colors duration-150",
          {
            "text-primary":
              (title === "Services" && scroll > 800 && scroll < 1900) ||
              (title === "Last Jobs" && scroll > 1900 && scroll < 2700) ||
              (title === "About us" && scroll > 2700 && scroll < 3700) ||
              (title === "Testimonials" && scroll > 3700 && scroll < 4500) ||
              (title === "Contact" && scroll > 4500),
          }
        )}
        href={url}
      >
        {title}
      </Link>
    </li>
  )
}

export default Item
