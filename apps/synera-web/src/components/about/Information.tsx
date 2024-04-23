"use client"

import { cn } from "@/lib/utils"
import {
  RiBehanceFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import React from "react"

type InformationProps = {
  item: { name: string; role: string; social: { title: string; url: string }[] }
  index: number
  className?: string
}

// million-ignore
const Information = ({ item, index, className }: InformationProps) => {
  const router = useRouter()
  return (
    <div
      className={cn(
        "h-max flex items-center justify-center flex-col gap-3 mb-12",
        {
          "w-1/4 xxl:w-[30%] sm:xxl:w-full": index === 0 || index === 2,
          "w-2/4 xxl:w-[40%] sm:xxl:w-full": index === 1,
        },
        className
      )}
      key={index}
    >
      <h3 className="text-white text-4xl font-semibold xxl:text-3xl lg:xxl:text-2xl sm:lg:xxl:text-3xl ">
        {item.name}
      </h3>
      <small className="text-2xl text-primary text-normal xxl:text-xl lg:xxl:text-lg sm:lg:xxl:text-xl">
        {item.role}
      </small>
      <div className="flex flex-row gap-4">
        {item.social.map((social, index) => (
          <div key={index}>
            {social.title === "Linkedin" && (
              <RiLinkedinBoxFill
                onClick={() => router.push(social.url)}
                size={50}
                className="text-primary cursor-pointer hover:text-primary/70 transition-colors duration-200"
              />
            )}
            {social.title === "Behance" && (
              <RiBehanceFill
                onClick={() => router.push(social.url)}
                size={50}
                className="text-primary cursor-pointer hover:text-primary/70 transition-colors duration-200"
              />
            )}
            {social.title === "Github" && (
              <RiGithubFill
                onClick={() => router.push(social.url)}
                size={50}
                className="text-primary cursor-pointer hover:text-primary/70 transition-colors duration-200"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
