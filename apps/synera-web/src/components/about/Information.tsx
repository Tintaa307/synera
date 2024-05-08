"use client"

import {
  RiBehanceFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react"
import { useRouter } from "next/navigation"
import React from "react"
import { IconFileCv } from "@tabler/icons-react"

type InformationProps = {
  item: { title: string; url: string }
  index: number
}

// million-ignore
const Information = ({ item, index }: InformationProps) => {
  const router = useRouter()
  return (
    <div key={index}>
      {item.title === "Linkedin" && (
        <RiLinkedinBoxFill
          onClick={() => router.push(item.url)}
          size={40}
          className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
        />
      )}
      {item.title === "Behance" && (
        <RiBehanceFill
          onClick={() => router.push(item.url)}
          size={40}
          className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
        />
      )}
      {item.title === "Github" && (
        <RiGithubFill
          onClick={() => router.push(item.url)}
          size={40}
          className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
        />
      )}
      {item.title === "Cv" && (
        <IconFileCv
          onClick={() => router.push(item.url)}
          size={40}
          className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
        />
      )}
    </div>
  )
}

export default Information
