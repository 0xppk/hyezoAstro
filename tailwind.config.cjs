/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        waterMelon: "#ED4C6A",
        orange: "#ffa500",
        sea: "#0984e3fe",
        paleBlue: "rgb(102, 153, 204)",
        lightGray: "#EAECEF",
        darkGray: "#363636",
        smokeWhite: "#F6FAFA",
        smokeBlack: "#1E1E1E",
        salary: "#CAFC9D",
        darkslateblue: "darkslateblue",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    fontSize: {
      "3xs": "clamp(0.70rem, calc(0.67rem + 0.14vw), 0.80rem)",
      "2xs": "clamp(0.79rem, calc(0.73rem + 0.25vw), 0.96rem)",
      xs: "clamp(0.89rem, calc(0.80rem + 0.39vw), 1.15rem)",
      sm: "clamp(1.00rem, calc(0.87rem + 0.56vw), 1.38rem)",
      base: "clamp(1.13rem, calc(0.94rem + 0.79vw), 1.65rem)",
      md: "clamp(1.27rem, calc(1.01rem + 1.07vw), 1.98rem)",
      lg: "clamp(1.42rem, calc(1.09rem + 1.43vw), 2.38rem)",
      xl: " clamp(1.60rem, calc(1.16rem + 1.88vw), 2.85rem)",
      "2xl": "clamp(1.80rem, calc(1.23rem + 2.43vw), 3.42rem)",
      "3xl": "clamp(2.03rem, calc(1.30rem + 3.12vw), 4.11rem)",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      main: ["Varela", "system-ui"],
    },
    minHeight: {
      content: "100vh",
    },
  },
  plugins: [],
};
