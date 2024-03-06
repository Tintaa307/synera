import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#84E9FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "line-gradient": "linear-gradient(90deg, #78d5ff 0%, #2321eb 100%)",
        "text-gradient": "linear-gradient(to bottom,#fff 40%,hsla(0,0%,0%,0));",
        "box-gradient": "linear-gradient(to bottom,transparent 10%,#000);",
        "circle-gradient":
          "radial-gradient(circle 350px at 50% 60%, #84E9FF 0%, transparent 100%)",
      },
      boxShadow: {
        gradient:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-shadow-colored);",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },

        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
export default config
