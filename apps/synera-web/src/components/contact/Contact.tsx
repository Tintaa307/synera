"use client"

import React, { useEffect, useState } from "react"
import Input from "./Input"
import { toast, Toaster } from "sonner"
import { handleSubmit } from "@/actions/contact-actions"
import Loader from "../loader/Loader"

const Contact = () => {
  const inputs = [
    { type: "text", placeholder: "Nombre completo...", name: "name" },
    { type: "email", placeholder: "Correo electrónico...", name: "email" },
    { type: "tel", placeholder: "Teléfono...", name: "phone" },
  ]

  const [isLoading, setIsLoading] = useState(false)

  const formAction = async (formData: any) => {
    try {
      const res = await handleSubmit(formData)
      switch (res.status) {
        case 200:
          setIsLoading(false)
          toast.success(res.message)
          break
        case 500:
          setIsLoading(false)
          res.message.map((msg: string) => toast.error(msg)) as string[]
          break
        default:
          setIsLoading(false)
          toast.error("Error al enviar el mensaje")
          break
      }
    } catch (error) {
      console.log(error)
      toast.error("Error al enviar el mensaje")
    }
  }

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <section
      id="Contact"
      className="w-full h-full flex items-center justify-center mt-24 scroll-m-20"
    >
      <Toaster position="top-center" duration={3000} richColors />
      <div className="w-[90%] h-max flex items-center justify-center flex-col ">
        <section className="w-full h-max flex items-start sm:items-center justify-center flex-row">
          <div className="w-1/2 h-max flex items-center justify-center flex-col gap-12 xl:w-full">
            <header className="w-full h-max flex sm:items-center items-center justify-center flex-col gap-2">
              <h4 className="text-white/90 text-3xl font-normal">
                Hablemos un poco
              </h4>
              <p className="text-white/60 text-sm font-normal  text-center">
                Deja una solicitud y te contactaremos para aclarar detalles.
              </p>
            </header>
            <form
              action={formAction}
              autoComplete="off"
              className="w-full xl:w-2/3 h-max flex sm:items-center items-center justify-center flex-col gap-8 xl:md:w-full"
            >
              {inputs.map((input, index) => (
                <Input key={index} {...input} />
              ))}
              <textarea
                placeholder="Escribe un mensaje..."
                rows={5}
                cols={5}
                name="message"
                maxLength={200}
                className="w-2/3 h-[104px] px-4 bg-[#070707] border-[1px] border-white/20 rounded-md placeholder:text-white/70 text-sm text-white/80 font-normal outline-none focus:outline-2 focus:outline-white/50 transition-all duration-200 py-2 resize-none sm:w-full"
              />
              <button
                type="submit"
                onClick={() => setIsLoading(true)}
                className="w-2/3 h-12 flex items-center justify-center bg-[#070707] rounded-md text-white text-sm border-[1px] border-white/20 font-normal outline-none hover:border-white/60 transition-colors duration-200 mb-12 sm:w-full"
              >
                {isLoading ? <Loader /> : "Enviar"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Contact
