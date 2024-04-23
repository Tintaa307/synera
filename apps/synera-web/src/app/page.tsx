import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Jobs from "@/components/jobs/Jobs"
import Landing from "@/components/landing/Landing"
import Services from "@/components/services/Services"

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
