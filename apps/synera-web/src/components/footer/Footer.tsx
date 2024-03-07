"use client"

import Link from "next/link"
import React from "react"
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
} from "@remixicon/react"
import Button from "../ui/Button"
import { useRouter } from "next/navigation"
import { IconPhoneCall } from "@tabler/icons-react"

const Footer = () => {
  const router = useRouter()
  const socialMedia = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/synera.team/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/synera-team/",
    },
    {
      name: "Github",
      url: "https://github.com/Tintaa307/synera-app",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/synera.team/",
    },
  ]

  return (
    <footer className="w-full h-[60vh] flex items-center justify-center">
      <div className="w-[90%] h-full flex items-center justify-center flex-col">
        <div className="w-full h-full flex items-center justify-center flex-row">
          <section className="w-1/2 h-full flex items-center justify-center flex-col gap-4">
            <div className="flex flex-col">
              <small className="text-white/60 text-sm font-normal">
                Buenos Aires, Argentina.
              </small>
              <small className="text-white/60 text-sm font-normal">
                Synera team #develop.
              </small>
            </div>
            <ul className="flex flex-row gap-5">
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm font-normal"
                  >
                    {social.name === "Instagram" && (
                      <RiInstagramLine
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                    {social.name === "LinkedIn" && (
                      <RiLinkedinBoxFill
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                    {social.name === "Github" && (
                      <RiGithubFill
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                    {social.name === "Twitter" && (
                      <RiTwitterXFill
                        size={26}
                        className="text-white/80 cursor-pointer hover:text-primary transition-colors duration-200"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="w-1/2 h-max flex items-center justify-center flex-col gap-4">
            <h2 className="text-white text-[22px] font-normal">
              If you liked what you saw.
            </h2>
            <Button
              action={() => router.push("https://calendly.com/synera-app")}
              className="text-base font-normal h-14 group w-1/3"
            >
              Book a call{" "}
              <IconPhoneCall
                size={20}
                className="text-primary group-hover:animate-wiggle  transition-colors duration-200"
              />{" "}
            </Button>
          </section>
        </div>
        <div className="w-full h-max flex items-center justify-center border-t-[1px] border-white/20">
          <small className="text-white/60 text-sm font-normal my-4">
            © 2024 Synera. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
