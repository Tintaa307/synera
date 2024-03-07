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
}

const Information = ({ item, index }: InformationProps) => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      viewport={{ once: true }}
      className={cn(
        "h-max flex items-center justify-center flex-col gap-3 mb-12",
        {
          "w-1/4": index === 0 || index === 2,
          "w-2/4": index === 1,
        }
      )}
      key={index}
    >
      <h3 className="text-white text-4xl font-semibold">{item.name}</h3>
      <small className="text-2xl text-primary text-normal">{item.role}</small>
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
    </motion.div>
  )
}

export default Information
