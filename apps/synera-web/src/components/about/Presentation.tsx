import Image from "next/image"
import React from "react"
import Information from "./Information"
import { CarouselItem } from "../ui/carousel"

type PresentationProps = {
  image: string
  alt: string
  role: string
  social: { title: string; url: string }[]
  index: number
  name: string
}

const Presentation = ({
  alt,
  image,
  index,
  name,
  role,
  social,
}: PresentationProps) => {
  return (
    <CarouselItem className="basis-1/3 flex items-center justify-center card:basis-1/2 sm:card:basis-full">
      <div className="relative w-full z-10 gap-8 bg-card-gradient px-12 py-10 rounded-[31px] flex items-center justify-center flex-col border-white/20 border-[1px] sm:w-2/3 ls:sm:w-3/4 xs:ls:sm:w-full">
        <header className="w-full h-max flex flex-col items-center justify-center gap-3">
          <h4
            key={index}
            className="text-white font-semibold text-2xl xl:text-lg"
          >
            {name}
          </h4>
          <p className="text-primary text-base font-normal xl:text-sm">
            {role}
          </p>
        </header>
        <picture className="w-max h-max bg-[#141414] px-10 pt-2 rounded-[31px] lg:px-7">
          <Image
            src={image}
            alt={alt}
            width={260}
            height={389}
            className="xxl:w-[200px] xxl:h-[350px] xl:xxl:w-[180px] xl:xxl:h-[300px]"
          />
        </picture>
        <footer className="w-full h-max flex items-center justify-center flex-row gap-12">
          {social.map((item, index) => (
            <Information key={index} item={item} index={index} />
          ))}
        </footer>
      </div>
    </CarouselItem>
  )
}

export default Presentation
