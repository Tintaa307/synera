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
          <div className="w-5/6 xs:w-full h-max flex flex-col gap-6 xs:gap-4 items-center justify-center text-center">
            <h1 className="text-6xl h-max xxl:text-6xl xl:xxl:flex-col sm:xl:xxl:text-5xl xs:sm:xl:xxl:text-4xl font-bold text-center text-white/90 flex flex-row gap-4 xs:sm:xl:xxl:gap-2">
              <span>Creciendo juntos, </span>
              <span>logrando juntos</span>
            </h1>
            <p className="text-white/70 text-lg xs:text-sm xs:w-5/6 w-1/2 lg:w-3/4 md:lg:w-[95%] sm:text-base">
              En Synera, ofrecemos servicios de alta calidad para la creación o
              escalado de tus proyectos. Además, nos especializamos en fomentar
              relaciones sólidas con nuestros clientes.
            </p>
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
        </section>
      </Background>
    </main>
  )
}

export default Landing
