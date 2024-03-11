import About from "@/components/about/About"
import AboutUs from "@/components/about/AboutUs"
import Contact from "@/components/contact/Contact"
import Jobs from "@/components/jobs/Jobs"
import Landing from "@/components/landing/Landing"
import Services from "@/components/services/Services"
import { Testimonials } from "@/components/testimonials/Testimonials"

export default function Home() {
  return (
    <>
      <Landing />
      <Services />
      <Jobs />
      <About />
      {/* <Testimonials /> */}
      <Contact />
    </>
  )
}
