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

const Information = ({ item, index, className }: InformationProps) => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      viewport={{ once: true }}
      className={cn(
        "h-1/6 w-full flex items-center justify-center flex-col gap-3",
        {
          "w-1/4 xxl:w-[30%] sm:xxl:w-full": index === 0 || index === 2,
          "w-2/4 xxl:w-[40%] sm:xxl:w-full": index === 1,
        },
        className
      )}
      key={index}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        {item.social.map((social, index) => (
          <div key={index} className="flex justify-center items-center w-full h-full">
            {social.title === "Linkedin" && (
              <RiLinkedinBoxFill
                onClick={() => router.push(social.url)}
                size={50}
                className="text-black cursor-pointer hover:text-primary/70 transition-colors duration-200"
              />
            )}
            {social.title === "Behance" && (
              <RiBehanceFill
                onClick={() => router.push(social.url)}
                size={50}
                className="text-black cursor-pointer hover:text-primary/70 transition-colors duration-200"
              />
            )}
            {social.title === "Github" && (
              <RiGithubFill
                onClick={() => router.push(social.url)}
                size={50}
                className="text-black cursor-pointer hover:text-primary/70 transition-colors duration-200"
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Information
