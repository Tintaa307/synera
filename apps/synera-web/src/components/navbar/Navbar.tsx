import React from "react"
import Item from "./Item"

const Navbar = () => {
  const arrItems = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "Services",
      link: "#services",
    },
    {
      title: "Last Jobs",
      link: "#last-jobs",
    },
    {
      title: "About us",
      link: "#about",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ]
  return (
    <header className="fixed top-0 left-0 z-40 min-w-full h-20 flex items-center justify-center border-b-[1px] border-b-white/20 backdrop-blur-2xl">
      <nav className="w-[90%] h-full flex items-center justify-between">
        <div className="w-1/3 h-full flex items-center justify-start">
          <span className="h-2 w-[75px] bg-blue absolute blur-md flex justify-center items-center"></span>
          <small className="text-2xl font-bold text-transparent bg-clip-text bg-text-gradient user-select-none">
            Synera
          </small>
        </div>
        <ul className="w-2/3 h-full flex items-center justify-evenly flex-row gap-20">
          {arrItems.map((item, index) => (
            <Item key={index} title={item.title} url={item.link} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
