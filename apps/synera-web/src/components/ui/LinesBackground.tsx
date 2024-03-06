"use client"

import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const Col = ({ index, className }: { index: number; className?: string }) => {
  return (
    <motion.span
      initial={{ height: 0 }}
      animate={{ height: "200%" }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className={cn(
        "w-[1px] h-full bg-[#111111] flex items-start justify-center rotate-45",
        className
      )}
    >
      <motion.span
        initial={{ height: "0%", opacity: 0 }} // Estado inicial: 0%
        animate={{
          height: ["0%", "40%"],
          opacity: [1, 0],
        }}
        transition={{
          duration: 3,
          delay: 2,
          type: "tween",
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
          times: [0, 1],
        }}
        className={cn({
          "w-full bg-line-gradient mt-[75px] rounded-full": index === 7,
          "w-full bg-line-gradient mt-[75px]": index === 16 || index === 24,
        })}
      />
    </motion.span>
  )
}

const LinesBackground = ({ children, className }: BoxProps) => {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [boxWidth, setBoxWidth] = useState<number>()
  const [boxHeight, setBoxHeight] = useState<number>()
  const [numberOfCols, setNumberOfCols] = useState<number>(0)

  useEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth)
      setBoxHeight(boxRef.current.offsetHeight)
    }
  }, [boxRef.current, boxRef.current?.offsetHeight])

  useEffect(() => {
    console.log("boxWidth", boxWidth)
  }, [boxWidth])

  useEffect(() => {
    if (boxWidth !== 0 && boxWidth) {
      setNumberOfCols(Math.floor(boxWidth / 40) - 1)
    }
  }, [boxWidth])

  return (
    <div
      ref={boxRef}
      className={cn("relative w-full h-screen overflow-hidden", className)}
    >
      <div className="absolute h-screen flex items-start justify-center flex-row gap-10 -z-10">
        <div className="w-full h-full flex items-center justify-center flex-row gap-10">
          {[...Array(numberOfCols)].map((_, i) => (
            <Col key={i} index={i} />
          ))}
        </div>
        <div className="w-full h-full flex items-center justify-center flex-row gap-10">
          {[...Array(numberOfCols)].map((_, i) => (
            <Col key={i} index={i} />
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

export default LinesBackground
