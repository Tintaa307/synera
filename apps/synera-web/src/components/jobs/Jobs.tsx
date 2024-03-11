"use client"

import React from "react"
import Card from "./Card"
import Title from "../ui/Title"

const Jobs = () => {
  const JobsArr = [
    {
      title: "Génesis",
      description:
        "Genesis Clinic website: a streamlined landing page for accessing different branches and professionals.",
      image: "/images/Genesis.svg",
      link: "https://www.consultoriogenesis.com/",
      items: ["Website", "UX/UI", "Frontend"],
    },
    {
      title: "Pillwise app",
      description:
        "The official PillWise app, a reminder for seniors to take their medications and keep track of them.",
      image: "/images/Pillwise.svg",
      link: "",
      items: ["Web/App", "UX/UI", "Frontend"],
    },
    {
      title: "Portfolio web",
      description:
        "Valentín Gonzalez's personal portfolio, showcasing various projects and technologies.",
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
          title="jobs"
          highlight="Last"
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
