import React from "react"
import Presentation from "./Presentation"
import Title from "../ui/Title"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const About = () => {
  const aboutArr = [
    {
      name: "Valentín Gonzalez",
      image: "/images/valentin-image.svg",
      alt: "image-valentin",
      role: "Desarrollador Fullstack",
      social: [
        {
          title: "Linkedin",
          url: "https://www.linkedin.com/in/valentin-gonzalez-6a1805276/",
        },
        { title: "Github", url: "https://github.com/Tintaa307" },
      ],
    },
    {
      name: "Bruno Mendiburu",
      image: "/images/bruno-image.svg",
      alt: "image-bruno",
      role: "Diseñador UX/UI",
      social: [
        {
          title: "Linkedin",
          url: "https://www.linkedin.com/in/mendiburubruno/",
        },
        { title: "Behance", url: "" },
      ],
    },
    {
      name: "Tomas Lami",
      image: "/images/tomas-image.svg",
      alt: "image-tomas",
      role: "Desarrollador Fullstack",
      social: [
        {
          title: "Linkedin",
          url: "https://www.linkedin.com/in/tomaslami/",
        },
        { title: "Github", url: "https://github.com/tomaslami" },
      ],
    },
    {
      name: "Nicolas Nuñez",
      image: "/images/nico-img.svg",
      alt: "image-nicolas",
      role: "Cierre De Ventas",
      social: [
        {
          title: "Linkedin",
          url: "https://www.linkedin.com/in/nicolas-nuñez-631ba127a/",
        },
        { title: "Cv", url: "#" },
      ],
    },
    // {
    //   name: "Facundo Lanzilotti",
    //   image: "/images/facu-img-final-2.svg",
    //   alt: "image-facundo",
    //   role: "Marketing Digital",
    //   social: [
    //     {
    //       title: "Linkedin",
    //       url: "https://linkedin.com/in/facundo-lanzilotti/",
    //     },
    //     { title: "Cv", url: "/Facundo-Lanzilotti-CV.pdf" },
    //   ],
    // },
  ]

  return (
    <section
      id="About"
      className="w-full h-full flex items-center justify-center mt-24 scroll-m-10"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col">
        <Title
          title="Sobre"
          highlight="nosotros"
          order="first"
          className="text-5xl font-semibold text-white text-center my-12"
        />

        <div className="h-max w-[90%] 3xl:w-full sm:card:3xl:w-[90%] card:3xl:w-[95%] xs:sm:card:3xl:w-[80%]">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="flex flex-row">
              {aboutArr.map((item, index) => (
                <Presentation
                  key={index}
                  index={index}
                  image={item.image}
                  alt={item.alt}
                  name={item.name}
                  role={item.role}
                  social={item.social}
                />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default About
