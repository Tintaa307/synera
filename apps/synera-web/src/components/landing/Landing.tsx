"use client"

import React from "react"
import { Spotlight } from "@/components/ui/Spotlight"
import Button from "@/components/ui/Button"
import {
  IconPhoneCall,
  IconBrandLinkedin,
  IconChartBar,
} from "@tabler/icons-react"
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
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="#84E9FF"
          />
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="w-5/6 h-max flex flex-col gap-6 items-center justify-center text-center"
          >
            <div
              className={[
                "w-max h-max px-8 py-3 rounded-2xl bg-[#070707] border-[1px] border-white/20 my-4 ",
                "gradient-shadow",
                "shadow-secondary-foreground/20",
              ].join(" ")}
            >
              <small className="text-white text-base font-medium flex flex-row gap-2 items-center select-none">
                Digital Agency{" "}
                <IconChartBar size={25} className="text-primary" />
              </small>
            </div>
            <h1 className="h-[155px] text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Make your dreams come <br />
              true through a website
            </h1>
            <p className="text-white/70 text-lg w-1/2">
              At Synera, we provide high-quality services for the creation or
              scaling of your projects. Additionally, we specialize in fostering
              strong client relationships.
            </p>
            <div className="flex flex-row w-full items-center justify-center h-max gap-4">
              <Button
                action={() => router.push("https://calendly.com/synera-app")}
                className="text-base font-normal h-14 group"
              >
                Book a call{" "}
                <IconPhoneCall
                  size={20}
                  className="text-primary group-hover:animate-wiggle  transition-colors duration-200"
                />{" "}
              </Button>
              <Button
                action={() =>
                  router.push(
                    "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A101669482&keywords=Synera&origin=ENTITY_SEARCH_HOME_HISTORY&sid=Mua"
                  )
                }
                className="w-max px-4 text-base font-normal h-14 group"
              >
                Visit our linkedin
                <IconBrandLinkedin
                  size={22}
                  className="text-primary group-hover:animate-wiggle  transition-colors duration-200"
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
