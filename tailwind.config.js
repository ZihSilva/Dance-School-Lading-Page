module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  screens: {
    xs: "375",
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1200px",
    xxl: "1440px",
  },
  backgroundImage: {
    "pack-train": "url('./src/components/images/Tranquili_tea.png')",
  },

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      viola: {
        50: "#faf5f9",
        100: "#f7ecf5",
        200: "#f0daec",
        300: "#e4bddd",
        400: "#ce89c0",
        500: "#c272b0",
        600: "#ac5694",
        700: "#93437a",
        800: "#7a3a66",
        900: "#673456",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },

  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    fancy: ["Dancing Script"],
    body: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
      "Dancing Script",
    ],

    sans: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
      "Dancing Script",
    ],

    extend: {},
  },
};
