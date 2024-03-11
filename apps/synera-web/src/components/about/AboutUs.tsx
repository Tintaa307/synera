"use client"
import React from 'react'
import Title from '../ui/Title'
import Presentation from './Presentation'
import Information from './Information'
import PresentationNew from './PresentationNew'
import InfoNew from './InfoNew'

const AboutUs = () => {
  const aboutArr = [
    {
      name: "Valentín Gonzalez",
      image: "/images/valentin-image.svg",
      alt: "image-valentin",
      role: "Full-Stack Developer",
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
      role: "Designer",
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
      role: "Full-Stack Developer",
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

      <div className="w-[90%] h-max flex items-center justify-center flex-col gap-4 md:w-full">
        <Title
          title="About"
          highlight="us"
          order="first"
          className="text-5xl font-semibold text-white text-center my-12"
        />
        <div className='w-full md:w-[80%] h-max flex flex-row items-center justify-between lg:flex-col gap-10'>
          {aboutArr.map((item, index) => (
            <div className='w-[580px] h-[650px] md:w-full bg-white p-5 flex justify-center items-center flex-col rounded-3xl gap-5'>
              <PresentationNew
                key={index}
                index={index}
                name={item.name}
                role={item.role}
                image={item.image}
                alt={item.alt}
                aboutArr={aboutArr}
              />
              <InfoNew key={index} item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs