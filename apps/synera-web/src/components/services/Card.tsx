import React from "react"
import { motion } from "framer-motion"

type ServiceProps = {
  title: string
  description: string
  icon: string
  className?: string
  index: number
}

const Card = ({ index, description, icon, title, className }: ServiceProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
      viewport={{ once: true }}
      className="w-[475px] h-[300px] flex flex-col justify-center items-center bg-[#070707] rounded-2xl p-5 border-[0.5px] border-white/20 bg-opacity-65 z-10 hover:border-white/50 transition-colors duration-200"
    >
      <div className="w-full h-1/2 flex justify-center items-center">
        <span className="w-[75px] h-[75px] bg-primary rounded-full opacity-50"></span>
        <div className="w-[75px] h-[75px] bg-primary rounded-full opacity-95 absolute mt-3 flex justify-center items-center z-10">
          <img src={icon} alt={title} className="w-[50px] h-[50px]" />
        </div>
        <span className="w-[75px] h-[75px] bg-primary rounded-full opacity-50"></span>
      </div>
      <div className="w-full h-1/2 flex justify-center items-center flex-col gap-6">
        <h2 className="text-white md:text-3xl text-2xl w-full h-1/5 text-center">
          {title}
        </h2>
        <p className="text-[#A8A8A8] text-base text-center w-full h-4/5">
          {description}
        </p>
      </div>
    </motion.article>
  )
}

export default Card
