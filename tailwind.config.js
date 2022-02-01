module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cardDown: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
        cardUp: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
      },
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
