import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Information from "./Information"
import { cn } from "@/lib/utils"

type PresentationProps = {
  image: string
  alt: string
  aboutArr: {
    name: string
    image: string
    alt: string
    role: string
    social: { title: string; url: string }[]
  }[]
  index: number
}

const Presentation = ({ alt, image, aboutArr, index }: PresentationProps) => {
  return (
    <motion.picture
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      viewport={{ once: true }}
      className="relative z-10 sm:w-full sm:flex sm:items-center sm:justify-center sm:flex-col gap-8"
    >
      <Image src={image} alt={alt} width={460} height={689} />
      <article className="w-full hidden sm:flex  sm:items-center sm:justify-center sm:flex-row">
        {aboutArr.map((item, i) => (
          <Information
            key={i}
            item={item}
            index={i}
            className={cn({
              hidden: i !== index,
            })}
          />
        ))}
      </article>
    </motion.picture>
  )
}

export default Presentation
