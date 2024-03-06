import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-further":
          "radial-gradient(circle 1920px at 50% 50%, transparent, #000)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-gradient":
          "linear-gradient(130deg, #070707 20%, #151515 40%, #070707 60%)",
        "border-gradient":
          "linear-gradient(160deg, #232323 20%,#747474 80%,#232323 20%)",
        "box-gradient": "linear-gradient(to bottom,transparent 10%,#000);",
        "line-gradient": "linear-gradient(90deg, #78d5ff 0%, #2321eb 100%)",
        "text-gradient":
          "linear-gradient(to right bottom,#fff 30%,hsla(0,0%,100%,.5));",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "-468px 0",
          },
          "100%": {
            backgroundPosition: "468px 0",
          },
        },

        border_gradient: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 6s infinite linear",
        border_gradient: "border_gradient 3s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
export default config
