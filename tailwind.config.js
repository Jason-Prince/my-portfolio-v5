module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: [`'Montserrat', sans-serif`],
        RobotoMono: [`'Roboto Mono', monospace`],
        Poppins: [`"Poppins", sans-serif`],
      },
      colors: {
        light: "#f9f9f9",
        dark: "#282828",
      },
    },
  },
  plugins: [],
};
