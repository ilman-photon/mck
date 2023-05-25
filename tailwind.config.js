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
        mckwhite: "#FFFFFF",
        mckskyblue: "#0084D4",
        mckgreen: "#00AD50",
        mckblue70: "#4D5F9C",
        mckblack: "#000000",
        mckred: "#DC2E21",
        mckgreyborder: "#808CB8",
      },
      width: {
        487 : '487px',
        '526': '526px',
        598 : '598px',
        842 : '842px',
        83: '83%',
        550: '550px',
        212: '212px',
        270: '270px'
      },
      height: {
        402: '402px',
        414: '414px',
        636: '636px',
        782: '782px',
        500: '500px',
        300: '300px',
        395: '395px',
        480: '480px',
      },
      minHeight: {
        52: '52px',
        57: '57px',
        480: '480px',
      },
      left: {
        36: '36px',
        18: '-18px',
      },
      top: {
        13: '-13px',
        124: '124px',
        63: '63px',
      },
      bottom: {
        13: '-13px',
      },
      right: {
        8: '-8px',
      },
      padding: {
        72: "72px",
        54: "54px",
        36: "36px",
        30: "30px",
        11: "11px",
        46: "46px",
        120: "120px"
      
      },
      margin: {
        72: "72px",
      },
      paddingtop: {
        72: "72px",
      },
      fontSize: {
        32: "2rem",
        27: "1.688rem",
        54: "3.375rem",
        28: "28px",
        20: "20px"   },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        18: "72px",
        14:"14px",
      },
      bg: {
        mckbgwhite: "#FFFDFB",
        inputbg: "#F8F9FB",
        mckthingrey: "#CCD1E3",
        mckyellow: "#FFEABC",
        lightblue: "#EAF1F8",
        acuteblue: "#DBDFEB",
        mckblue70: "#4D5F9C",
      },
      shadow: {
        wheretobuy: '6px 10px 20px rgba(0, 26, 113, 0.15)',
      },
      backgroundColor: theme => ({
        'preventiveyellow': '#FFC238',
        'diagnosticgreen': '#b2dbd3',
        'acuteblue': '#CCD1E3',
        'everydayblue': '#A7C8E9',
        'shadesblue': '#F2F4F9',
      }),
      boxShadow: {
        'whatpeoplesaying': '0px 4px 12px rgba(0, 0, 0, 0.25)',
        'circleshadow': '0px 9px 11px -5px rgba(0, 0, 0, 0.25)',
      },
      lineHeight:{
        linemax: "50px",
        24:"24px",
        32:"32px",
        30:"30px",
      },
      border: {
        blue20: "#CCD1E3",
      }
    },
  },
  plugins: [],
};
