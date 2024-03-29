"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import React, { useState } from "react"

const Lang = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setlang] = useState(pathname.slice(1, 3))

  return (
    <div className="fixed bottom-5 right-5 w-[46px] h-[46px] bg-[#070707] border-[2px] border-white/20 rounded-full cursor-pointer z-50 hover:border-white/30 transition-all">
      {
        lang === "es" ?
          <span
            onClick={() => {
              if (lang === "es") {
                setlang(pathname.slice(1, 3))
                router.push("/en")
              } else {
                setlang(pathname.slice(1, 3))
                router.push("/es")
              }
            }}
            className="text-white text-xl w-full h-full flex items-center justify-center select-none"
          >
            <Image width={46} height={46} src={"/images/España.svg"} alt={"Logo España"} />
          </span>
          :
          <span onClick={() => {
            if (lang === "es") {
              setlang(pathname.slice(1, 3))
              router.push("/en")
            } else {
              setlang(pathname.slice(1, 3))
              router.push("/es")
            }
          }}>
            <Image width={46} height={46} src={"/images/USA.svg"} alt={"Logo USA"} />
          </span>
      }
    </div>
  )
}

export default Lang
