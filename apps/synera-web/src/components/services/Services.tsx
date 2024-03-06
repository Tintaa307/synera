"use client"

import React, { useEffect, useRef, useState } from "react"
import Card from "./Card"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

const Services = () => {
  const ServicesArr = [
    {
      title: "Web & Graphic Design",
      description:
        "Turn your ideas into a bespoke web design tailored to your needs. We use innovative tools for a unique digital presence.",
      icon: "/icons/DesignIcon.svg",
    },
    {
      title: "Web Applications",
      description:
        "Craft custom web applications aligned with your design and goals, whether it's an elegant interface or specialized features.",
      icon: "/icons/WebAppsIcon.svg",
    },
    {
      title: "Marketing Service",
      description:
        "Boost your online presence with captivating social content and strategic ads on platforms, enhancing brand recognition.",
      icon: "/icons/MarketingIcon.svg",
    },
    {
      title: "Personal Brand",
      description:
        "Develop or enhance your personal brand with a unique focus, creating a distinct and memorable identity.",
      icon: "/icons/BrandIcon.svg",
    },
    {
      title: "SEO Optimization",
      description:
        "Maximize visibility on search engines. Our SEO optimization makes your site more accessible, improving positioning and relevance.",
      icon: "/icons/SEOIcon.svg",
    },
    {
      title: "Sales Funnels",
      description:
        "Design effective sales funnel strategies for increased brand recognition and conversions. We drive business growth.",
      icon: "/icons/SalesICON.svg",
    },
  ]

  return (
    <section
      className={cn(
        "w-full min-h-screen flex justify-center items-center gap-10 mt-24 flex-col"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        viewport={{ once: true }}
        className="absolute w-full h-full rounded-full bg-circle-gradient"
      />
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="md:text-5xl text-4xl font-semibold text-white text-center"
      >
        Our <span className="text-primary">services</span>
      </motion.h2>
      <div className="w-[90%] flex justify-center items-center gap-5 md:mt-10 flex-wrap relative">
        <span className="absolute bg-blue w-[300px] h-[300px] rounded-full blur-sm gradient-card md:bottom-[20%] md:right-[5%] xxl:top-[40%] xxl:right-[15%] bottom-[10%] right-[15%]"></span>
        <span className="absolute bg-blue w-[300px] h-[300px] rounded-full blur-sm gradient-card md:top-[20%] md:left-[5%] xxl:left-[20%] top-[25%] left-[15%]"></span>
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
