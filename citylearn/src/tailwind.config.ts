import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00d2ff", // Electric Blue
        background: "#0e1417", // Deep Navy/Charcoal
        surface: "#161d1f",
        outline: "#859399",
        error: "#ffb4ab",
        success: "#00e38b",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;