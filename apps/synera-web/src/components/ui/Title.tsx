"use client"

import React from "react"
import { motion } from "framer-motion"

type TitleProps = {
  title: string
  className?: string
  highlight: string
  order?: "first" | "second"
}

const Title = ({ title, className, highlight, order }: TitleProps) => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={className}
      >
        {order === "first" ? (
          <>
            {title} <span className="text-primary">{highlight}</span>
          </>
        ) : (
          <>
            <span className="text-primary">{highlight}</span> {title}
          </>
        )}
      </motion.h2>
    </div>
  )
}

export default Title
