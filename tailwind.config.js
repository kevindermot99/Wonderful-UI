/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        SourceCodePro: ['Source Code Pro', 'sans-serif'],
        WorkSans: ['Work Sans', 'sans-serif'],
        Raleway: ['Raleway','sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        "main-color": "#648DE5",
        "body-color-light": "#F7F9F7",
        "body-color-dark": "#121212",
        "border-lines-light": "#e7e7e7",
        "border-lines-dark": "#1D1D1D",
        "dark-text": "#2F333C",
        "light-text": "#7d7d7d",
      },
    },
  },
  plugins: [],
}

