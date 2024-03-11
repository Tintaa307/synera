"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import React, { useState } from "react"

const Lang = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setlang] = useState(pathname.slice(1, 3))

  return (
    <div className="fixed bottom-5 right-5 w-12 h-12 bg-[#070707] border-[1px] border-white/20 rounded-full cursor-pointer">
      <h6
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
        {lang}
      </h6>
    </div>
  )
}

export default Lang
