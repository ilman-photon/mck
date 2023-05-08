/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "18/25": "72%",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mckblue: "#001a71",
        "mckblue-90": "#1A317F",
        "beige-50": "#FFFAF6",
        mcklightblue: "#e6e8f1",
        mckyellow: "#FFEABC",
        mcklightyellow: "#FFF6ED",
        mckgrey: "#d9f3fd",
        mcklightgrey: "#d9f3fd",
        mckthickgrey: "#E0EAE8",
        mckthingrey: "#CCD1E3",
        mcknormalgrey: "#3a3e41",
        mckgreen: "#2CCFAD",
        mcklggrey:"#4D5F9C",
        mckbodybg: "#FFFDFB",
      },
      width: {
        '526': '526px',
      },
      height: {
        '636': '636px',
      },
      padding: {
        72: "72px",
      },
      fontSize: {
        27: "1.688rem",
        54: "3.375rem",
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        18: "72px",
        14:"14px",
      },
    },
  },
  plugins: [],
};
