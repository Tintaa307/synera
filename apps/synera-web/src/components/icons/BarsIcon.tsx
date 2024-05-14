"use client"
import { motion } from "framer-motion"

const variants = {
  closed: {
    d: "M4 8l16 0 M4 16l16 0",
  },
  open: {
    d: "M18 6l-12 12 M6 6l12 12",
  },
}

const Path = (props: any) => (
  <motion.path fill="none" stroke="#fff" {...props} />
)
// million-ignore
export const BarsIcon = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu text-white/90"
      width="28"
      onClick={() => setIsOpen(!isOpen)}
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        variants={variants}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      />
    </motion.svg>
  )
}
