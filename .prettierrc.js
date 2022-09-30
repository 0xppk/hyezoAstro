module.exports = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
  ],
  semi: true,
  tabWidth: 2,
  printWidth: 90,
  trailingComma: "all",
  bracketSameLine: false,
  arrowParens: "avoid",
};
