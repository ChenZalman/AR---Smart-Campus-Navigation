module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_3f": "var(--black_900_3f)", "900_4c": "var(--black_900_4c)" },
        blue_gray: { 200: "var(--blue_gray_200)" },
        teal: { 700: "var(--teal_700)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: { xs: "0 4px 4px 0 #0000003f", sm: "0 1px 3px 0 #0000004c" },
      fontFamily: { roboto: "Roboto", manrope: "Manrope", titanone: "Titan One" },
      textShadow: { ts: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
