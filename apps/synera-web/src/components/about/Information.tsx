import {
  RiBehanceFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react"
import React from "react"
import { IconFileCv } from "@tabler/icons-react"
import Link from "next/link"

type InformationProps = {
  item: { title: string; url: string }
  index: number
}

const Information = ({ item, index }: InformationProps) => {
  return (
    <div key={index}>
      {item.title === "Linkedin" && (
        <Link href={item.url} target="_blank">
          <RiLinkedinBoxFill
            size={40}
            className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
          />
        </Link>
      )}
      {item.title === "Behance" && (
        <Link href={item.url} target="_blank">
          <RiBehanceFill
            size={40}
            className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
          />
        </Link>
      )}
      {item.title === "Github" && (
        <Link href={item.url} target="_blank">
          <RiGithubFill
            size={40}
            className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
          />
        </Link>
      )}
      {item.title === "Cv" && (
        <Link href={item.url} target="_blank">
          <IconFileCv
            size={40}
            className="text-white cursor-pointer hover:text-white/70 transition-colors duration-200"
          />
        </Link>
      )}
    </div>
  )
}

export default Information
