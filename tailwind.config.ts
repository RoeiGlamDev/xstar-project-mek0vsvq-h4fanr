import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFC0CB', // Light pink for accents
          DEFAULT: '#FF69B4', // Main pink color
          dark: '#FF1493', // Dark pink for highlights
        },
        black: {
          DEFAULT: '#000000', // Main black color
          light: '#1A1A1A', // Light black for backgrounds
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], // Elegant serif font
        sans: ['Arial', 'sans-serif'], // Clean sans-serif font
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem', // Custom spacing
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Enable active state for background color
      textColor: ['active'], // Enable active state for text color
    },
  },
  plugins: [],
};

export default config;