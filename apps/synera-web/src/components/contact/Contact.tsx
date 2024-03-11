"use client"

import React from "react"
import Title from "../ui/Title"
import Input from "./Input"
import { Toaster, toast } from "sonner"
import { ContactSchema } from "@/lib/validations/Schema"
import { z } from "zod"
import axios from "axios"
import { useTranslations } from "next-intl"

const Contact = () => {
  const t = useTranslations("Contact")
  const inputs = [
    { type: "text", placeholder: t("input1.placeholder"), name: "name" },
    { type: "email", placeholder: t("input1.placeholder"), name: "email" },
    { type: "tel", placeholder: t("input1.placeholder"), name: "phone" },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const values = Object.fromEntries(formData.entries())

    if (Object.values(values).some((value) => value === "")) {
      toast.error("Please fill in all fields")
      return
    }

    try {
      const result = ContactSchema.parse(values)

      await axios
        .post("/api/contact", result)
        .then(() => {
          toast.success("Message sent successfully")
        })
        .catch((error) => {
          toast.error("An error occurred, please try again later")
          console.log(error)
        })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => err.message)
        errors.forEach((err) => toast.error(err))
        return
      } else {
        toast.error("An error occurred, please try again later")
        console.log(error)
      }
    }
  }

  return (
    <section
      id="Contact"
      className="w-full h-full flex items-center justify-center mt-24"
    >
      <Toaster position="top-center" duration={3000} richColors />
      <div className="w-[90%] h-max flex items-center justify-center flex-col ">
        <Title
          title={t("title")}
          highlight={t("title2")}
          order="first"
          className="text-5xl font-semibold text-white text-center my-12"
        />
        <section className="w-full h-max flex items-start sm:items-center justify-center flex-row">
          <div className="w-1/2 h-max flex items-center justify-center flex-col gap-12 xl:w-full">
            <header className="w-full h-max flex sm:items-center items-center justify-center flex-col gap-2">
              <h4 className="text-white/90 text-3xl font-normal">
                {t("subtitle")}
              </h4>
              <p className="text-white/60 text-sm font-normal ">
                {t("description")}
              </p>
            </header>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="w-full h-max flex sm:items-center items-center justify-center flex-col gap-8"
            >
              {inputs.map((input, index) => (
                <Input key={index} {...input} />
              ))}
              <textarea
                placeholder={t("input4.placeholder")}
                rows={5}
                cols={5}
                name="message"
                maxLength={200}
                className="w-2/3 h-[104px] px-4 bg-[#070707] border-[1px] border-white/20 rounded-md placeholder:text-white/70 text-sm text-white/80 font-normal outline-none focus:outline-2 focus:outline-white/50 transition-all duration-200 py-2 resize-none sm:w-full"
              />
              <button
                type="submit"
                className="w-2/3 h-12 bg-[#070707] rounded-md text-white text-sm border-[1px] border-white/20 font-normal outline-none hover:border-white/60 transition-colors duration-200 mb-12 sm:w-full"
              >
                {t("button")}
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Contact
