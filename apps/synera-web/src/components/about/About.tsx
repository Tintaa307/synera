
import React from "react"
import Presentation from "./Presentation"
import Information from "./Information"
import Background from "../ui/Backgrounds"
import Title from "../ui/Title"

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
      name: "Tomas Lami Guralnik",
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
  ]

  return (
    <section
      id="About"
      className="w-full h-full flex items-center justify-center mt-24"
    >
      <div className="w-[90%] h-max flex items-center justify-center flex-col md:w-full">
        <Title
          title="Sobre"
          highlight="nosotros"
          order="first"
          className="text-5xl font-semibold text-white text-center my-12"
        />
        <Background
          bg_types="dots"
          animated
          className="w-full h-max flex flex-row items-center justify-between sm:flex-col"
        >
          {aboutArr.map((item, index) => (
            <Presentation
              key={index}
              index={index}
              image={item.image}
              alt={item.alt}
              aboutArr={aboutArr}
            />
          ))}
        </Background>
        <article className="w-full flex items-center justify-between flex-row sm:hidden mt-4">
          {aboutArr.map((item, index) => (
            <Information key={index} item={item} index={index} />
          ))}
        </article>
      </div>
    </section>
  )
}

export default About