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
      flexGrow: {
        3: '3',
      },
      order: {
        99: '99',
        'initial': 'initial',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mckblue: "#001a71",
        "mckblue-90": "#1A317F",
        beige50: "#FFFAF6",
        mckbeige: "#FFF6ED",
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
        mckopacityblue: "#001a712e",
        mckoverlaygrey: "#00000045",
        mckbeige70: "#FFFAF6B2",
      },
      width: {
        18: '18px',
        100: '100px',
        197: '197px',
        228: '228px',
        200: '200px',
        306 : '306px',
        325 : '325px',
        338: '338px',
        416: "416px",
        438: '438px',
        487 : '487px',
        526: '526px',
        598 : '598px',
        842 : '842px',
        966 : '966px',
        83: '83%',
        550: '550px',
        212: '212px',
        270: '270px',
        80: '80%',
        95: '95%',
        202: '202px',
        166: '166px',
        498: '498px',
        640: '640px',
        800: '800px',
        700: '700px',
        500: '500px',
        229: '229px',
        191: '191px',
        239: '239px'
      },
      height: {
        25: '25px',
        50: '50px',
        100: '100px',
        200: '200px',
        210: '210px',
        110: '110px',
        136: '136px',
        225: '225px',
        240: '240px',
        260: '260px',
        272: '272px',
        276: '276px',
        402: '402px',
        450: '450px',
        314: '314px',
        414: '414px',
        636: '636px',
        665: '665px',
        760: '760px',
        782: '782px',
        854: '854px',
        500: '500px',
        300: '300px',
        395: '395px',
        480: '480px',
        502: '502px',
        544: '544px',
        22: '22px',
        350: '350px',
        598: '598px',
        530: '530px',
        689: '689px',
        420: '420px',
        530: '530px'
      },
      maxWidth: {
        'unset':'unset',
        170: "170px",
        160: "160px",
        343: '343px',
        140: "140px",
        105: "105px",
      },
      minHeight: {
        50: '50px',
        57: '57px',
        96: '96px',
        300: '300px',
        377: '377px',
        480: '480px',
        420: '420px',
        450: '450px',
        700: '700px',
        300: '300px',
      },
      maxHeight:{
        160: '160px',
        200: '200px',
        314: '314px',
        540: '540px',
        240: '240px',
        260: '260px',
        620: '620px',
      },
      left: {
        36: '36px',
        18: '-18px',
        32: '32px',
      },
      top: {
        13: '-13px',
        124: '124px',
        63: '63px',
        11: '11px',
        105: '105px',
        81: '81px',
        29: '29px',
        54: '54px'
      },
      bottom: {
        13: '-13px',
        0.2: '-2px',
      },
      right: {
        10: '-10px',
        8: '-8px',
        11: '11px',
        28: '28px',
        0: '0'
      },
      padding: {
        '0.5': '5px',
        9: '9px',
        10: '10px',
        15: '15px',
        18: '18px',
        23: '23px',
        36: '36px',
        72: "72px",
        54: "54px",
        36: "36px",
        30: "30px",
        11: "11px",
        46: "46px",
        120: "120px",
        24: "24px"
      },
      margin: {
        24: "24",
        21: "-2px",
        60: "60",
        72: "72px",
        76: "76px",
        100: "100px",
        170: "170px",
        169: "169px",
        73: "-73px",
        145: "-145px",
        50: "50px",
      },
      fontSize: {
        32: "2rem",
        27: "1.688rem",
        54: "54px",
        28: "28px",
        20: "20px", 
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
        beigetransparent: "rgba(255, 250, 246, 0.7)",
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
        'overlaygrey': "#0003",
      }),
      boxShadow: {
        'whatpeoplesaying': '0px 4px 12px rgba(0, 0, 0, 0.25)',
        'circleshadow': '0px 9px 11px -5px rgba(0, 0, 0, 0.25)',
      },
      lineHeight:{
        linemax: "50px",
        24:"24px",
        27:"27px",
        36:"36px",
        32:"32px",
        30:"30px",
        61:"61px",
        18:"18px",
        21:"21px",
      },
      borderWidth: {
        '0.5': '0.5px',
        3: "3px",
      },
      border: {
        blue20: "#CCD1E3",
      },
      borderRadius: {
        10: '10px',
        50: '50%',
      },
      screens: {
        mobilesm: {'max':'360px'},
        mobile: {'max': '767px'},
        mobilelarge: {'max': '1023px'},
        ipadlarge: {'max': '1025px', 'min':'1023px'},
        desktopmini: {'max' : '1280px', 'min':'1023px'},
        desktop: {'max' : '1280px'},
        smalldekstop:  {'max': '1285px','min':'1280px'},
        mediumdesktop: {'max': '1380px','min':'1280px'},
        xtralarge: {'min': '1600px'},
      },
      zIndex: {
        1: '1',
        0.1: '-1',
        9997: '9997',
        9999: '9999',
      }
    },
  },
  plugins: [],
};
