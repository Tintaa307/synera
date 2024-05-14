import React from "react"
import { Spotlight } from "@/components/ui/Spotlight"
import { IconCalendarPlus } from "@tabler/icons-react"
import Background from "../ui/Backgrounds"
import Link from "next/link"

const Landing = () => {
  return (
    <main id="Home" className="w-full h-screen">
      <Background
        bg_types="lines"
        animated
        className="w-full h-full flex items-center justify-center bg-box-gradient"
      >
        <section className="h-screen w-full antialiased flex items-center justify-center">
          <Spotlight
            className="-top-40 left-0 xl:-left-40 xl:-top-28 lg:xl:-top-16 ms:lg:xl:top-2 ms:lg:xl:-left-6 ls:ms:lg:xl:top-24 ls:ms:lg:xl:left-24"
            fill="#84E9FF"
          />
          <div className="w-5/6 xs:w-full h-max flex flex-col gap-6 xs:gap-4 items-center justify-center text-center px-3">
            <div className="">
              <h1 className="w-full h-max text-7xl xxl:text-6xl xl:gap-0 md:xxl:text-5xl sm:md:xxl:text-4xl ls:sm:md:xxl:text-3xl sm:xs:leading-10 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex justify-center items-center flex-col gap-3">
                <span>Convierte tus objetivos en realidad</span>
                <span>a través de un sitio web</span>
              </h1>
            </div>
            <p className="text-white/70 text-lg xs:text-sm w-1/2 lg:w-3/4 md:lg:w-[95%] sm:text-base">
              En Synera, ofrecemos servicios de alta calidad para la creación o
              escalado de tus proyectos. Además, nos especializamos en fomentar
              relaciones sólidas con nuestros clientes.
            </p>
            <div className="flex flex-row w-full items-center justify-center h-max gap-12 xs:pt-5">
              <Link
                href={"https://calendly.com/synera-app"}
                className="text-base font-normal h-14 group w-max px-4 bg-[#090909] text-white/90 flex items-center justify-center gap-2 rounded-md border-[1px] border-white/20 hover:bg-[#0c0c0c] transition-all duration-150"
              >
                Reservá una llamada{" "}
                <IconCalendarPlus
                  size={20}
                  strokeWidth={1.5}
                  className="text-white group-hover:animate-wiggle  transition-colors duration-200"
                />{" "}
              </Link>
            </div>
          </div>
        </section>
      </Background>
    </main>
  )
}

export default Landing
