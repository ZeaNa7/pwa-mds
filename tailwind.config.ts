/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleOrange: '#c5e2d8',
        paleGreen: '#f39e79',
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['responsive', 'hover', 'focus', 'active'],
      gradientOpacity: ['responsive', 'hover', 'focus', 'active'],
      backgroundImage: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
