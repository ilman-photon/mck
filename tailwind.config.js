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
        transparent: 'transparent',
        current: 'currentColor',
        'mckblue': '#001a71',
        'mcklightblue' : '#e6e8f1',
        'mckyellow': '#FFEABC',
        'mcklightyellow': '#FFF6ED',
        'mckgrey': '#d9f3fd',
        'mcklightgrey': '#d9f3fd',
        'mckthickgrey': '#E0EAE8',
        'mckthingrey': '#CCD1E3',
        'mcknormalgrey': '#3a3e41',
        'mckhwhite': '#FFFAF6',
        'mckgreen': '#2CCFAD'        
      },
    },
  },
  plugins: [],
};