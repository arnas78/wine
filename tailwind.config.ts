/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Quattrocento: ["Quattrocento", "serif"],
        Lora: ["Lora", "serif"],
      },
      colors: {
        "accent": "#A7727D",
        "primary": "#F8ECDD",
        "secondary": "#F7F0E6",
        "background": "#FAF5EE",
        "grey-100": "#E3D8DC",
        "grey-300": "#A7A1A3",
        "grey-500": "#7D7577",
        "grey-700": "#4E4446",
        "grey-900": "#2D2224",
        "white": "#FFFFFF",
      }
    },
  },
  plugins: [],
};
