import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

type PresentationProps = {
  image: string
  alt: string
}

const Presentation = ({ alt, image }: PresentationProps) => {
  return (
    <motion.picture
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      viewport={{ once: true }}
      className="relative z-10"
    >
      <Image src={image} alt={alt} width={460} height={689} />
    </motion.picture>
  )
}

export default Presentation
