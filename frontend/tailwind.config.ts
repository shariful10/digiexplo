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
        secondary: "#EFF4F7",
        textColor: "#222b4f",
        darkBlue: "#140F44",
        descColor: "rgba(34, 43, 79, 0.63)",
        shadowBorder: "#F1F1F4",
      },
    },
  },
  plugins: [],
};

export default config;
