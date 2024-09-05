import React from "react"
import Card from "./Card"
import Title from "../ui/Title"

const Services = () => {
  const ServicesArr = [
    {
      title: "Diseño Web y Gráfico",
      description:
        "Convierte tus ideas en un diseño web a medida adaptado a tus necesidades. Utilizamos herramientas innovadoras para una presencia digital única.",
      icon: "/icons/DesignIcon.svg",
    },
    {
      title: "Aplicaciones Web",
      description:
        "Crea aplicaciones web personalizadas alineadas con tu diseño y objetivos, ya sea una interfaz elegante o características especializadas.",
      icon: "/icons/WebAppsIcon.svg",
    },
    {
      title: "Servicio de Marketing",
      description:
        "Impulsa tu presencia en línea con contenido social cautivador y anuncios estratégicos en plataformas, mejorando el reconocimiento de marca.",
      icon: "/icons/MarketingIcon.svg",
    },
  ]

  return (
    <section
      id="Services"
      className="w-full min-h-screen flex justify-center items-center mt-24 xs:mt-0 flex-col scroll-m-10"
    >
      <div className="absolute w-full h-[1000px] blur-3xl rounded-full xxl:bg-circle-gradient-xl bg-circle-gradient-xxl xxl:xs:bg-circle-gradient-small -z-5" />
      <Title
        title="Nuestros"
        highlight="servicios"
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
