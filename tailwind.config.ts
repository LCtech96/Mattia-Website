import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3F0',
          300: '#EDEAE5',
          400: '#E5E1DA',
          500: '#D4CFC5',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E8ECE8',
          200: '#D1D9D1',
          300: '#9FAF9F',
          400: '#6B7D6B',
          500: '#5A6B5A',
          600: '#4A5A4A',
          700: '#3A4A3A',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#2C2C2C',
          800: '#212121',
          900: '#1A1A1A',
        },
        terracotta: {
          50: '#FDF4F1',
          100: '#FAE8E0',
          200: '#F5D1C1',
          300: '#EDB39F',
          400: '#E08F6F',
          500: '#D4734F',
          600: '#C05A3A',
          700: '#9E4A2F',
          800: '#7D3B26',
          900: '#5C2C1C',
        },
        primary: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3F0',
          300: '#EDEAE5',
          400: '#E5E1DA',
          500: '#D4CFC5',
          600: '#5A6B5A',
          700: '#4A5A4A',
          800: '#3A4A3A',
          900: '#2C2C2C',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

