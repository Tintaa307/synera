"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { IconStarFilled, IconQuote } from "@tabler/icons-react"
import Image from "next/image"
import { Quot } from "./Quot"
import Background from "./Backgrounds"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 px-8 py-6 md:w-[450px] bg-white flex flex-col gap-6 mt-[52px]"
            key={item.name}
          >
            <picture className="w-full h-max flex items-center justify-center">
              <div className="absolute w-48 h-20 -top-[80px]">
                <Image
                  src={"/images/dots.svg"}
                  alt="dots"
                  width={192}
                  height={80}
                  className="w-full h-full"
                />
              </div>

              <Image
                src={"/images/logo-synera-xs.svg"}
                alt="synera-logo"
                width={84}
                height={84}
                className="rounded-full absolute -top-10"
              />
            </picture>
            <div className="w-full h-max flex items-center justify-center flex-row mt-8">
              <IconStarFilled size={15} className="text-[#FF5201]" />
              <IconStarFilled size={15} className="text-[#FF5201]" />
              <IconStarFilled size={15} className="text-[#FF5201]" />
              <IconStarFilled size={15} className="text-[#FF5201]" />
              <IconStarFilled size={15} className="text-[#FF5201]" />
            </div>
            <blockquote>
              <span className=" relative z-20 text-xs leading-[1.4] text-black font-normal">
                {item.quote}
              </span>
            </blockquote>
            <span className="relative w-full h-[1px] bg-black/40">
              <div className="absolute left-0 bg-primary py-1 px-1">
                <Quot />
              </div>
            </span>
            <div className="w-full h-max flex items-center justify-center">
              <small className="text-black/90 text-sm">{item.name}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

{
  /* <div className="relative z-20 mt-6 flex flex-row items-center">
<span className="flex flex-col gap-1">
  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
    {item.name}
  </span>
  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
    {item.title}
  </span>
</span>
</div> */
}
