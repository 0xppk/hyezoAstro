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
      sm: "clamp(0.67rem, calc(0.59rem + 0.22vw), 0.76rem);",
      mono: "clamp(0.76rem, calc(0.64rem + 0.28vw), 0.9rem);",
      base: "clamp(0.81rem, calc(0.69rem + 0.33vw), 0.97rem);",
      base2: "clamp(0.86rem, calc(0.76rem + 0.42vw), 1.08rem);",
      md: "clamp(0.9rem, calc(0.82rem + 0.55vw), 1.22rem);",
      md2: "clamp(0.94rem, calc(0.83rem + 0.6vw), 1.32rem);",
      lg: "clamp(1.17rem, calc(0.95rem + 0.88vw), 1.76rem)",
      xl: "clamp(1.40rem, calc(1.09rem + 1.08vw), 1.95rem)",
      "2xl": "clamp(1.69rem, calc(1.25rem + 1.48vw), 2.44rem)",
      "3xl": "clamp(1.9rem, calc(1.44rem + 1.67vw), 2.84rem)",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    minHeight: {
      content: "100vh",
    },
  },
  plugins: [],
};