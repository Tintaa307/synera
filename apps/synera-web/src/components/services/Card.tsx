import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type ServiceProps = {
  title: string
  description: string
  icon: string
  className?: string
  index: number
}
// million-ignore
const Card = ({ description, icon, title, className }: ServiceProps) => {
  return (
    <article
      className="w-[475px] h-[300px] xs:h-[350px] flex flex-col justify-center items-center bg-card-gradient rounded-2xl p-5 border-[0.5px] border-white/20 z-10 hover:border-white/50 transition-colors duration-200"
    >
      <div className="w-full h-1/2 flex justify-center items-center">
        <span className="w-[75px] h-[75px] bg-primary rounded-full opacity-50"></span>
        <div className="w-[75px] h-[75px] bg-primary rounded-full opacity-95 absolute mt-3 flex justify-center items-center z-10">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>
        <span className="w-[75px] h-[75px] bg-primary rounded-full opacity-50"></span>
      </div>
      <div className="w-full h-1/2 flex justify-center items-center flex-col gap-6">
        <h2 className="text-white md:text-3xl text-2xl xs:text-xl w-full h-1/5 text-center">
          {title}
        </h2>
        <p className="text-[#A8A8A8] text-base text-center w-full h-4/5">
          {description}
        </p>
      </div>
    </article>
  )
}

export default Card
