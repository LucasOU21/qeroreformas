/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: colors.yellow, // Accent colors
      orange: {
        ...colors.orange,
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
      },
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
      primary: {
        // Updated powerful, professional navy blue color
        50: '#f0f4f8',
        100: '#d9e2ec',
        200: '#bcccdc',
        300: '#9fb3c8',
        400: '#829ab1',
        500: '#003366', // Main brand color - deep navy blue
        600: '#334e68',
        700: '#243b53',
        800: '#1a2a3a',
        900: '#102a43',
      },
      secondary: { 
        // Updated to a rich golden accent
        50: '#fffcf2',
        100: '#fff8dc',
        200: '#fff0b9',
        300: '#ffe577',
        400: '#ffd735',
        500: '#daa520', // Accent color - rich gold
        600: '#b8860b',
        700: '#9c7301',
        800: '#856000',
        900: '#6e5000',
      },
      cyan: colors.cyan,
      sky: colors.sky,
      stone: colors.stone,
      rose: colors.rose,
      blue: colors.blue,
      teal: colors.teal,
    },
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-veryslow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};