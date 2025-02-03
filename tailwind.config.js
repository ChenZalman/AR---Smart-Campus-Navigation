module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_3f": "var(--black_900_3f)", "900_4c": "var(--black_900_4c)" },
        blue_gray: { 200: "var(--blue_gray_200)", "700_56": "var(--blue_gray_700_56)" },
        gray: { "800_4c": "var(--gray_800_4c)" },
        teal: {100: "var(--blue_gray_200)", 300: "#3E6F75", 700: "#005f6b" },
        royalblue: {
          100: "#B0C6E5", 
          300: "#6082B6", 
          700: "#2D4A78",
        },
        bubble_gray: { 
          DEFAULT: "#B4C5E2", 
          light: "#D7D8D9"  
        },

      },
      boxShadow: { xs: "0 4px 4px 0 #0000003f", sm: "0 1px 3px 0 #0000004c" },
      fontFamily: { manrope: "Manrope", roboto: "Roboto", titanone: "Titan One" },
      textShadow: { ts: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
