import { text } from "stream/consumers";
import { type Config } from "tailwindcss";
import theme, { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        "blink-cyan": {
          "0%": { color: "#22d3ee" },
          "100%": { color: "#a3a3a3" },
        },
        "blink-lime": {
          "0%": { color: "#a3e635" },
          "100%": { color: "#a3a3a3" },
        },
        "blink-fuchsia": {
          "0%": { color: "#e879f9" },
          "100%": { color: "#a3a3a3" },
        },
        "blink-linkedin": {
          "0%": { color: "#60a5fa" },
          "100%": { color: "#FFF" },
        },
        "blink-github": {
          "0%": { color: "#facc15" },
          "100%": { color: "#FFF" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "blink-cyan": "blink-cyan 2.5s",
        "blink-lime": "blink-lime 2.5s",
        "blink-fuchsia": "blink-fuchsia 2.5s",
        "blink-linkedin": "blink-linkedin 2.5s",
        "blink-github": "blink-github 2.5s",
      },
    },
  },
  plugins: [],
} satisfies Config;
