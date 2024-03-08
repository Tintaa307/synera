"use client"

import React from "react"
import { Spotlight } from "@/components/ui/Spotlight"
import Button from "@/components/ui/Button"
import { IconCalendarPlus } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Background from "../ui/Backgrounds"

const Landing = () => {
  const router = useRouter()
  return (
    <main id="Home" className="w-full h-screen">
      <Background
        bg_types="lines"
        animated
        className="w-full h-full flex items-center justify-center bg-box-gradient"
      >
        <section className="h-screen w-full antialiased flex items-center justify-center">
          <Spotlight
            className="-top-40 left-0 md:xs:-left-28  md:-top-20"
            fill="#84E9FF"
          />
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="w-5/6 xs:w-full h-max flex flex-col gap-6 xs:gap-4 items-center justify-center text-center px-3"
          >
            <h1 className="w-full h-full text-7xl lg:text-5xl lg:sm:text-4xl sm:xs:text-[28px] sm:xs:leading-7 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Make your dreams come <br />
              true through a website
            </h1>
            <p className="text-white/70 text-lg xs:text-sm w-1/2 md:w-full">
              At Synera, we provide high-quality services for the creation or
              scaling of your projects.
            </p>
            <div className="flex flex-row w-full items-center justify-center h-max gap-12 xs:pt-5">
              <Button
                action={() => router.push("https://calendly.com/synera-app")}
                className="text-base font-normal h-14 group"
              >
                Book a call{" "}
                <IconCalendarPlus
                  size={20}
                  strokeWidth={1.5}
                  className="text-white group-hover:animate-wiggle  transition-colors duration-200"
                />{" "}
              </Button>
            </div>
          </motion.div>
        </section>
      </Background>
    </main>
  )
}

export default Landing
