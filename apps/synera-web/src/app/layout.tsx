import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Synera",
  description:
    "At Synera, we provide high-quality services for the creation or scaling of your projects. Additionally, we specialize in fostering strong client relationships.",
  keywords:
    "Synera, software, development, web, mobile, design, consulting, services, projects, client, relationships, agency, company, business, technology, innovation, creativity, quality, experience, expertise, team, professionals, experts, solutions, digital, transformation, growth, success, strategy, development, design, consulting, services, projects, client, relationships, agency, company, business, technology, innovation, creativity, quality, experience, expertise, team, professionals, experts, solutions, digital, transformation, growth, success, strategy",
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
      <body className={workSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
