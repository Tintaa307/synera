import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "#84E9FF",
        gray_text: "#949CA4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "line-gradient": "linear-gradient(90deg, #78d5ff 0%, #2321eb 100%)",
        "text-gradient": "linear-gradient(to bottom,#fff 40%,hsla(0,0%,0%,0));",
        "box-gradient": "linear-gradient(to bottom,transparent 10%,#000);",
        "circle-gradient-xxl":
          "radial-gradient(circle 350px at 50% 60%, #84E9FF 0%, transparent 100%)",
        "circle-gradient-xl":
          "radial-gradient(circle 250px at 50% 56%, #84E9FF 0%, transparent 100%)",
        "circle-gradient-small":
          "radial-gradient(circle 175px at 50% 56%, #84E9FF 0%, transparent 100%)",
        "card-gradient": "linear-gradient(to left top,#040404 60%,#111111);",
        "email-gradient": "linear-gradient(to right,#12648E 10%,#001926);",
      },
      boxShadow: {
        gradient:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-shadow-colored);",
        internal: "inset 0px 0px 80px rgba(0, 0, 0, 1)",
      },
      screens: {
        xs: { raw: "(max-width: 550px)" },
        ls: { raw: "(max-width: 680px)" },
        sm: { raw: "(max-width: 750px)" },
        ms: { raw: "(max-width: 817px)" },
        md: { raw: "(max-width: 930px)" },
        card: { raw: "(max-width: 1000px)" },
        lg: { raw: "(max-width: 1050px)" },
        xl: { raw: "(max-width: 1200px)" },
        xxl: { raw: "(max-width: 1473px)" },
        "3xl": { raw: "(max-width: 1543px)" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
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
        wiggle: "wiggle 0.5s ease-in-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animation-delay"),
  ],
} satisfies Config

export default config
