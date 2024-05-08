"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Item from "./Item"
import Link from "next/link"
import { BarsIcon } from "../icons/BarsIcon"
import { cn } from "@/lib/utils"
import { SyneraIcon } from "../icons/SyneraIcon"
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTiktokFill,
} from "@remixicon/react"

// million-ignore
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const arrItems = [
    {
      title: "Servicios",
      link: "#Services",
    },
    {
      title: "Proyectos",
      link: "#Jobs",
    },
    {
      title: "Nosotros",
      link: "#About",
    },

    {
      title: "Contacto",
      link: "#Contact",
    },
  ]

  const socialMedia = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/synerarg/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/synera-web/",
    },
    {
      name: "Github",
      url: "https://github.com/Tintaa307/synera-app",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@synerarg",
    },
  ]

  return (
    <header className="fixed top-0 left-0 z-40 min-w-full h-20 flex items-center justify-center border-b-[1px] border-b-white/20 backdrop-blur-2xl">
      <nav className="w-[90%] h-full flex items-center justify-between">
        <div className="w-2/5 h-full flex items-center justify-start xxl:w-1/4 xl:justify-between">
          <span className="h-2 w-[75px] bg-blue absolute blur-md flex justify-center items-center"></span>
          <Link
            onClick={() => setIsOpen(false)}
            href={"#Home"}
            className="relative text-2xl font-bold text-transparent bg-clip-text bg-text-gradient select-none z-50"
          >
            <SyneraIcon />
          </Link>
        </div>
        <div className="w-2/3 h-full flex justify-end items-center gap-2">
          <ul className="w-full h-[60%] flex items-center justify-between flex-row md:hidden  rounded-3xl">
            {arrItems.map((item, index) => (
              <Item key={index} title={item.title} url={item.link} />
            ))}
          </ul>
        </div>
        <div className="relative hidden md:block z-50">
          <BarsIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <aside
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black hidden md:flex -translate-x-full transition-all duration-500 xl:items-center xl:justify-center",
          {
            "translate-x-0 transition-all duration-500": isOpen,
          }
        )}
      >
        <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-start flex-col mt-20">
          <span className="w-[90%] h-[1px] bg-white/20" />
          <ul className="w-[90%] h-max flex items-center justify-center flex-col gap-12 mt-12">
            {arrItems.map((item, index) => (
              <Item
                key={index}
                index={index}
                title={item.title}
                url={item.link}
                action={() => setIsOpen(false)}
                entryAnimation={true}
                className="text-white/90 text-xl"
              />
            ))}
          </ul>
          <section className="w-1/2 md:w-full h-full md:h-1/2 flex items-center justify-center flex-col gap-4 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, type: "tween", delay: 0.8 }}
              className="absolute bottom-24 flex flex-col"
            >
              <small className="text-white/60 text-sm font-normal">
                Buenos Aires, Argentina.
              </small>
              <small className="text-white/60 text-sm font-normal">
                Equipo Synera #develop.
              </small>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, type: "tween", delay: 0.8 }}
              className="absolute bottom-12 flex flex-row gap-5"
            >
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm font-normal"
                  >
                    {social.name === "Instagram" && (
                      <RiInstagramLine
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                    {social.name === "LinkedIn" && (
                      <RiLinkedinBoxFill
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                    {social.name === "Github" && (
                      <RiGithubFill
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                    {social.name === "TikTok" && (
                      <RiTiktokFill
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </section>
        </div>
      </aside>
    </header>
  )
}

export default Navbar
