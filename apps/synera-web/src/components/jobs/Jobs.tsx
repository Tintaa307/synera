"use client"

import React from "react"
import Card from "./Card"
import Title from "../ui/Title"
import { useTranslations } from "next-intl"

const Jobs = () => {
  const t = useTranslations("LastJobs")
  const JobsArr = [
    {
      title: t("card1.title"),
      description: t("card1.description"),
      image: "/images/Genesis.svg",
      link: "https://www.consultoriogenesis.com/",
      items: ["Website", "UX/UI", "Frontend"],
    },
    {
      title: t("card2.title"),
      description: t("card2.description"),
      image: "/images/Pillwise.svg",
      link: "",
      items: ["Web/App", "UX/UI", "Frontend"],
    },
    {
      title: t("card3.title"),
      description: t("card3.description"),
      image: "/images/TintaPortfolio.svg",
      link: "https://valentin-portfolio.vercel.app/",
      items: ["Website", "UX/UI", "Frontend"],
    },
  ]

  return (
    <section
      id="Jobs"
      className="w-full h-max flex justify-center items-start mt-44"
    >
      <div className="w-[90%] lg:w-full h-full flex justify-center items-center flex-col xs:gap-3">
        <Title
          title={t("title2")}
          highlight={t("title")}
          order="second"
          className="text-5xl font-semibold text-white text-center my-12"
        />
        <article className="w-[90%] h-max flex justify-center items-center gap-5 xs:gap-10 z-10 mb-12 flex-wrap ">
          {JobsArr.map((job, index) => (
            <Card
              key={index}
              index={index}
              title={job.title}
              description={job.description}
              image={job.image}
              link={job.link}
              items={job.items}
            />
          ))}
        </article>
      </div>
    </section>
  )
}

export default Jobs
