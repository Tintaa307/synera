import React from "react"
import Card from "./Card"
import Title from "../ui/Title"

const Jobs = () => {
  const JobsArr = [
    {
      title: "Clínica Génesis",
      description:
        "Sitio web de la Clínica Génesis: una página de aterrizaje simplificada para acceder a diferentes sucursales y profesionales.",
      image: "/images/Genesis.png",
      link: "https://consultoriogenesis.com.ar/",
      items: ["Website", "UX/UI", "Frontend"],
    },
    {
      title: "Lo De Lucas",
      description:
        "Página oficial del bodegón Lo De Lucas ubicado en Escobar, Buenos Aires. Diseño y desarrollo de la página web.",
      image: "/images/lo-de-lucas.png",
      link: "https://lodelucasbodegon.com",
      items: ["Website", "UX/UI", "Frontend"],
    },
    {
      title: "Cejas Propiedades",
      description:
        "Una plataforma creada para facilitar la búsqueda de tu próximo inmueble. Descubre campos, chacras y propiedades urbanas. ",
      image: "/images/cejas-propiedades.png",
      link: "https://www.cejaspropiedades.com/",
      items: ["Website", "UX/UI", "Frontend"],
    },
    {
      title: "Actualmente",
      description: "Página web diseñada para facilitar el acceso a cursos, certificaciones y recursos enfocados en el desarrollo de habilidades y el bienestar personal.",
      image: "/images/actualmente.png",
      link: "https://actualmente.com.ar/",
      items: ["Website", "Frontend"],
    },
    {
      title: "A&S Cleaning Solutions",
      description:
        "Plataforma web diseñada para descubrir servicios integrales de limpieza y fumigación, con un enfoque en calidad y confianza. .",
      image: "/images/cleaning.png",
      link: "https://solutionsas.com.ar/",
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
