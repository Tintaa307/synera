import Link from "next/link"
import React from "react"
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
} from "@remixicon/react"
import Button from "../ui/Button"
import { IconPhoneCall } from "@tabler/icons-react"
import { useTranslations } from "next-intl"

const Footer = () => {
  const t = useTranslations("Footer")
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
    <footer className="w-full h-[60vh] md:h-[40vh] flex items-center justify-center md:mt-20">
      <div className="w-[90%] h-full flex items-center justify-center flex-col">
        <div className="w-full h-full flex items-center justify-center flex-row md:flex-col">
          <section className="w-1/2 md:w-full h-full md:h-1/2 flex items-center justify-center flex-col gap-4 md:order-2">
            <div className="flex flex-col">
              <small className="text-white/60 text-sm font-normal">
                Buenos Aires, Argentina.
              </small>
              <small className="text-white/60 text-sm font-normal">
                {t("small")}
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
          <section className="w-1/2 md:w-full h-max md:h-1/2 flex items-center justify-center flex-col gap-4 md:order-1">
            <h2 className="text-white text-[22px] font-normal">{t("title")}</h2>
            <Link
              href="https://calendly.com/synera-app"
              className="text-base font-normal h-14 group w-max px-4 text-white/80 bg-[#070707] border-[1px] border-white/20 rounded-md flex items-center justify-center gap-2 hover:bg-[#090909] transition-colors duration-200 "
            >
              {t("button")}{" "}
              <IconPhoneCall
                size={20}
                className="text-primary group-hover:animate-wiggle  transition-colors duration-200"
              />{" "}
            </Link>
          </section>
        </div>
        <div className="w-full h-max flex items-center justify-center border-t-[1px] border-white/20">
          <small className="text-white/60 text-sm font-normal my-4">
            {t("rights")}
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
