/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#6b7280",
        c2: "#006ead",
        c3: "#e63e30",
        c4: "#fed103",
      },
      fontSize: {
        paragraph: "14px",
      },
      fontFamily: {
        montserrat: "montserrat,times,serif",
        fraunces: "fraunces,times,serif",
      },
    },
    screens: {
      xs: { max: "359px" },
      sm: { max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          primary: "#3d8168",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#f3eae3",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          // "--border-btn": 0,
        },
      },
      {
        dark: {
          primary: "#641ae6",
          secondary: "##d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#1d232a",
          info: "#006ead",
          success: "#00ff19",
          warning: "#fed103",
          error: "#f87272",
          // "--border-btn": 0,
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
