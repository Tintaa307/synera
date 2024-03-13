"use client"

import React from "react"
import Card from "./Card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Title from "../ui/Title"
import { useTranslations } from "next-intl"

const Services = () => {
  const t = useTranslations("Services")
  const ServicesArr = [
    {
      title: t("card1.title"),
      description: t("card1.description"),
      icon: "/icons/DesignIcon.svg",
    },
    {
      title: t("card2.title"),
      description: t("card2.description"),

      icon: "/icons/WebAppsIcon.svg",
    },
    {
      title: t("card3.title"),
      description: t("card3.description"),

      icon: "/icons/MarketingIcon.svg",
    },
    {
      title: t("card4.title"),
      description: t("card4.description"),

      icon: "/icons/BrandIcon.svg",
    },
    {
      title: t("card5.title"),
      description: t("card5.description"),

      icon: "/icons/SEOIcon.svg",
    },
    {
      title: t("card6.title"),
      description: t("card6.description"),

      icon: "/icons/SalesICON.svg",
    },
  ]

  return (
    <section
      id="Services"
      className={cn(
        "w-full min-h-screen flex justify-center items-center gap-10 mt-24 xs:mt-0 flex-col"
      )}
    >
      <motion.div

        className="absolute w-full h-full rounded-full xxl:bg-circle-gradient-xl bg-circle-gradient-xxl xxl:xs:bg-circle-gradient-small"
      />
      <Title
        title={t("title")}
        highlight={t("title2")}
        order="first"
        className="text-5xl font-semibold text-white text-center my-12"
      />
      <div className="w-[90%] flex justify-center items-center gap-5 flex-wrap relative">
        {ServicesArr.map((service, index) => (
          <Card
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
