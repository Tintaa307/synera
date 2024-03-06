import Link from "next/link"
import React from "react"

type ItemProps = {
  url: string
  title: string
}

const Item = ({ title, url }: ItemProps) => {
  return (
    <li className="group">
      <Link
        className="text-white/80 text-lg font-medium cursor-pointer group-hover:text-primary transition-colors duration-150"
        href={url}
      >
        {title}
      </Link>
    </li>
  )
}

export default Item
