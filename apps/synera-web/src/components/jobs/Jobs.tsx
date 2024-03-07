"use client"

import React from "react"
import Card from "./Card"
import Title from "../ui/Title"

const Jobs = () => {
  const JobsArr = [
    {
      title: "Génesis",
      description:
        "Sitio del Consultorio Genesis, landing page basica con acceso a las distintas ramas y distintos profesionales.",
      image: "/images/Genesis.svg",
      link: "https://www.consultoriogenesis.com/",
      items: ["Website", "UX/UI"],
    },
    {
      title: "Pillwise app",
      description:
        "App ofifficial de PillWise, recordatorio para personas mayores de tomar sus medicamentos y llevar un control de los mismos.",
      image: "/images/Pillwise.svg",
      link: "",
      items: ["Web/App", "UX/UI", "Frontend"],
    },
    {
      title: "Portfolio web",
      description:
        "Portfolio personal de Valentín Gonzalez, con acceso a distintos proyectos y distintas tecnologías.",
      image: "/images/TintaPortfolio.svg",
      link: "https://valentin-portfolio.vercel.app/",
      items: ["Website", "UX/UI", "Frontend"],
    },
  ]

  return (
    <section className="w-full h-max flex justify-center items-start mt-44">
      <div className="w-[90%] h-full flex justify-center items-center flex-col gap-20">
        <Title
          title="jobs"
          highlight="Last"
          order="second"
          className="text-5xl font-semibold text-white text-center my-12"
        />
        <article className="w-full h-max flex justify-center items-center gap-5 z-10 mb-12">
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
