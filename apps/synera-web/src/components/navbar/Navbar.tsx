"use client"

import React, { useState } from "react"
import Item from "./Item"
import Link from "next/link"
import { BarsIcon } from "../icons/BarsIcon"
import { cn } from "@/lib/utils"
import { SyneraIcon } from "../icons/SyneraIcon"
import { useTranslations } from "next-intl"
import Button from "../ui/Button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations("Navbar")
  const arrItems = [
    {
      title: t("item1"),
      link: "#Services",
    },
    {
      title: t("item2"),
      link: "#Jobs",
    },
    {
      title: t("item3"),
      link: "#About",
    },

    {
      title: t("item5"),
      link: "#Contact",
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
        <div className="w-3/5 h-full flex justify-end items-center gap-2">
          {/* <Button className="w-24 h-12 bg-white text-black font-semibold rounded-3xl">
            Service
          </Button> */}
          <ul className="w-4/5 h-[60%] flex items-center justify-evenly flex-row md:hidden bg-[#141414] rounded-3xl">
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
          <ul className="w-[90%] h-max flex items-start justify-start flex-col gap-12 mt-12">
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
        </div>
      </aside>
    </header>
  )
}

export default Navbar
