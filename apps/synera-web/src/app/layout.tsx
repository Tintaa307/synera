import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import { GoogleAnalytics } from "@next/third-parties/google"
import Footer from "@/components/footer/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Synera",
  description:
    "At Synera, we provide high-quality services for the creation or scaling of your projects. Additionally, we specialize in fostering strong client relationships.",
  keywords:
    "Synera, synera, synera digital agency, Synera digital agency, sinera, sinergia, software, development, web, mobile, design, consulting, services, projects, client, relationships, agency, company, business, technology, innovation, creativity, quality, experience, expertise, team, professionals, experts, solutions, digital, transformation, growth, success, strategy, development, design, consulting, services, projects, client, relationships, agency, company, business, technology, innovation, creativity, quality, experience, expertise, team, professionals, experts, solutions, digital, transformation, growth, success, strategy, synera agencia digital, Synera agencia digital, Sinera, sinergia, software, desarrollo, web, móvil, diseño, consultoría, servicios, proyectos, cliente, relaciones, agencia, empresa, negocio, tecnología, innovación, creatividad, calidad, experiencia, pericia, equipo, profesionales, expertos, soluciones, digital, transformación, crecimiento, éxito, estrategia, desarrollo, diseño, consultoría, servicios, proyectos, cliente, relaciones, agencia, empresa, negocio, tecnología, innovación, creatividad, calidad, experiencia, pericia, equipo, profesionales, expertos, soluciones, digital, transformación, crecimiento, éxito, estrategia.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.ico",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html translate="no">
      <GoogleAnalytics gaId="G-LYKZTJNP92" />
      <Analytics />
      <SpeedInsights />
      <body className={workSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
