import React from "react"
import Card from "./Card"
import Title from "../ui/Title"

const Jobs = () => {
  const JobsArr = [
    {
      title: "Clínica Génesis",
      description:
        "Sitio web de la Clínica Génesis: una página de aterrizaje simplificada para acceder a diferentes sucursales y profesionales.",
      image: "/images/Genesis.svg",
      link: "https://consultoriogenesis.com.ar/",
      items: ["Website", "UX/UI", "Frontend"],
    },
    {
      title: "Lo De Lucas",
      description:
        "Página oficial del bodegón Lo De Lucas ubicado en Escobar, Buenos Aires. Diseño y desarrollo de la página web.",
      image: "/images/lo-de-lucas.png",
      link: "https://lodelucasbodegon.com",
      items: ["Web/App", "UX/UI", "Frontend"],
    },
    {
      title: "Portafolio web",
      description:
        "Portafolio personal de Valentín González, mostrando varios proyectos y tecnologías muy recientes y utilizadas para un desarrollo óptimo.",
      image: "/images/TintaPortfolio.svg",
      link: "https://valentin-portfolio.vercel.app/",
      items: ["Website", "UX/UI", "Frontend"],
    },
  ]

  return (
    <section
      id="Jobs"
      className="w-full h-max flex justify-center items-start mt-44 scroll-m-10"
    >
      <div className="w-[90%] lg:w-full h-full flex justify-center items-center flex-col xs:gap-3">
        <Title
          title="trabajos"
          highlight="Últimos"
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
