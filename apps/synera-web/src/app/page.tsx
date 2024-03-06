"use client"

import LinesBackground from "@/components/ui/LinesBackground"
import React from "react"
import { Spotlight } from "@/components/ui/Spotlight"
import Button from "@/components/ui/Button"
import { IconPhoneCall, IconBrandLinkedin } from "@tabler/icons-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="w-full h-screen">
      <LinesBackground className="w-full h-full flex items-center justify-center">
        <section className="h-screen w-1/2 antialiased flex items-center justify-center">
          <Spotlight
            className="-top-40 left-0 md:-left-40 md:-top-20"
            fill="#84E9FF"
          />
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="w-5/6 h-max flex flex-col gap-4 items-start justify-center"
          >
            <h1 className="text-6xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Make your dreams come <br />
              true through a website
            </h1>
            <p className="text-white/70 text-base w-5/6">
              At Synera, we provide high-quality services for the creation or
              scaling of your projects. Additionally, we specialize in fostering
              strong client relationships.
            </p>
            <div className="flex flex-row w-full h-max gap-4">
              <Button className="text-base font-normal h-14 group">
                Book a call{" "}
                <IconPhoneCall
                  size={20}
                  className="text-primary group-hover:animate-wiggle  transition-colors duration-200"
                />{" "}
              </Button>
              <Button className="w-max px-4 text-base font-normal h-14 group">
                Visit our linkedin
                <IconBrandLinkedin
                  size={22}
                  className="text-primary group-hover:animate-wiggle  transition-colors duration-200"
                />{" "}
              </Button>
            </div>
          </motion.div>
        </section>
        <section className="w-1/2 h-screen"></section>
      </LinesBackground>
    </main>
  )
}
