import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Information from "./Information"
import { cn } from "@/lib/utils"

type PresentationProps = {
  name: string
  role: string
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

const Presentation = ({ name, role, alt, image, aboutArr, index }: PresentationProps) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      viewport={{ once: true }}
      className="relative z-10 sm:w-full sm:flex sm:items-center sm:justify-center sm:flex-col gap-8"
    >
      <div className="w-full h-1/5 flex justify-center items-center flex-col gap-2">
        <h3 className=" text-black text-2xl font-semibold xxl:text-2xl lg:xxl:text-2xl sm:lg:xxl:text-3xl ">
          {name}
        </h3>
        <small className="text-xl text-gray_text text-normal font-medium xxl:text-lg lg:xxl:text-lg sm:lg:xxl:text-xl">
          {role}
        </small>
      </div>
      <picture className="w-full h-4/5 flex justify-center items-center">
        <Image src={image} alt={alt} width={400} height={600} className="xs:w-[300px] xs:h-[450px] w-[325px] h-[400px] bg-[#D9D9D9] rounded-3xl" />
      </picture>
    </motion.div>
  )
}

export default Presentation
