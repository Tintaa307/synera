import React from "react"

type TitleProps = {
  title: string
  className?: string
  highlight: string
  order?: "first" | "second"
}

const Title = ({ title, className, highlight, order }: TitleProps) => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <h2 className={className}>
        {order === "first" ? (
          <>
            {title} <span className="text-primary">{highlight}</span>
          </>
        ) : (
          <>
            <span className="text-primary">{highlight}</span> {title}
          </>
        )}
      </h2>
    </div>
  )
}

export default Title
