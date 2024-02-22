import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B84FF",
        sidebar: "#0D0E12",
        secondary: "#EFF4F7",
        textColor: "#222b4f",
        darkBlue: "#140F44",
        descColor: "rgba(34, 43, 79, 0.63)",
        shadowBorder: "#F1F1F4",
      },
      screens: {
        small: "1110px",
        laptop: "1368px",
        xxl: "1448px",
      },
    },
  },
  plugins: [],
};

export default config;
