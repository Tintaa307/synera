import React, { SetStateAction } from "react"

type InputProps = {
  type: string
  placeholder: string
  name: string
}

const Input = ({ placeholder, type, name }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-2/3 h-12 px-4 bg-[#070707] border-[1px] border-white/20 rounded-md placeholder:text-white/70 text-sm text-white/80 font-normal outline-none focus:outline-2 focus:outline-white/50 transition-all duration-200 sm:w-full"
    />
  )
}

export default Input
