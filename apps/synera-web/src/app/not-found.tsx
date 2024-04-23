"use client"

import Background from "@/components/ui/Backgrounds"
import React from "react"

export default function NotFound() {
  return (
    <html>
      <body className="bg-black w-full h-screen flex items-center justify-center flex-col">
        <Background
          bg_types="grid"
          className="h-full w-full flex items-center justify-center bg-box-gradient"
        >
          <h1 className="text-transparent bg-clip-text bg-text-gradient text-7xl font-semibold">
            404 - Page Not Found
          </h1>
        </Background>
      </body>
    </html>
  )
}
