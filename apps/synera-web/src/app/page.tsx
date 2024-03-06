import About from "@/components/about/About"
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
      <Testimonials />
    </>
  )
}
