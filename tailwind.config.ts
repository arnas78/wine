import { nextui } from "@nextui-org/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[image|object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Quattrocento: ["Quattrocento", "serif"],
        Lora: ["Lora", "serif"],
      },
      colors: {
        accent: "#A7727D",
        primary: "#F8ECDD",
        danger: "#A7727D",
        secondary: "#F7F0E6",
        background: "#FDFDFC",
        "grey-100": "#E3D8DC",
        "grey-300": "#A7A1A3",
        "grey-500": "#7D7577",
        "grey-700": "#4E4446",
        "grey-900": "#2D2224",
        white: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: "#A7727D",
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: "#A7727D",
          },
        },
      },
    }),
  ],
};
