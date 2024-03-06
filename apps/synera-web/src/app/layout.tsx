import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"

const rubik = Rubik({ subsets: ["latin"] })

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
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
