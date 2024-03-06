import type { Metadata } from "next"
import { Rubik, Work_Sans } from "next/font/google"
import Exensa from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"

const rubik = Rubik({ subsets: ["latin"] })
const workSans = Work_Sans({ subsets: ["latin"] })
const exensa = Exensa({
  src: "../font/ExensaGrotesk-Regular.ttf",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Synera",
  description:
    "At Synera, we provide high-quality services for the creation or scaling of your projects. Additionally, we specialize in fostering strong client relationships.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
