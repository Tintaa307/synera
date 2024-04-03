import { cn } from "@/lib/utils"
import React from "react"
import { motion } from "framer-motion"
import {
  IconWorld,
  IconAppWindow,
  IconPencilStar,
  IconCode,
} from "@tabler/icons-react"
import Image from "next/image"

type JobsProps = {
  title: string
  description: string
  image: string
  link: string
  items: string[]
  className?: string
  index?: number
}

// million-ignore
const Card = ({
  description,
  image,
  items,
  link,
  title,
  className,
  index,
}: JobsProps) => {
  return (
    <div

      className={cn(
        "w-[400px] xs:w-full h-max flex flex-col justify-center items-center bg-[#070707] rounded-2xl",
        className
      )}
    >
      <picture
        className={cn(
          "w-full h-[55%] flex justify-start items-start",
          className
        )}
      >
        <a href={link} className={cn("w-full h-full", className)}>
          <Image
            width={400}
            height={256.52}
            src={image}
            className={cn(
              "w-full h-full object-cover rounded-t-2xl border-t-[1px] border-[1px] border-white/20",
              className
            )}
            alt={title}
          />
        </a>
      </picture>
      <article
        className={cn(
          "h-full rounded-b-2xl p-4 gap-5 flex justify-start items-start flex-col border-b-[1px] border-x-[1px] border-white/20",
          className
        )}
      >
        <div
          className={cn(
            "w-full h-1/3 flex justify-center items-start flex-col gap-3"
          )}
        >
          <h3
            className={cn(
              "text-white text-2xl font-bold tracking-wide",
              className
            )}
          >
            {title}
          </h3>
        </div>
        <div className={cn(
          "w-full h-1/3 flex justify-center items-start flex-col gap-3"
        )}>
          <p
            className={cn(
              "text-white/60 text-start text-sm font-normal",
              className
            )}
          >
            {description}
          </p>
        </div>
        <div
          className={cn(
            "w-full h-1/3 flex justify-start items-center flex-wrap gap-2"
          )}
        >
          {items.map((item, index) => (
            <small
              key={index}
              className={cn(
                "w-max text-white/90 text-start text-sm font-normal p-1 px-3 rounded-2xl border-[1px] border-white/60 select-none flex flex-row gap-1",
                className
              )}
            >
              {item}
              {item === "Website" && (
                <IconWorld size={20} className="text-primary" />
              )}
              {item === "Web/App" && (
                <IconAppWindow size={20} className="text-primary" />
              )}
              {item === "UX/UI" && (
                <IconPencilStar size={20} className="text-primary" />
              )}
              {item === "Frontend" && (
                <IconCode size={20} className="text-primary" />
              )}
            </small>
          ))}
        </div>
      </article>
    </div>
  )
}

export default Card
