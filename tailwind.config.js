/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        big: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },
      fontFamily: {
        roboto: ["Roboto", "roboto"],
      },
      colors: {
        'one': '#FF6900'
      }
    },
  },
  plugins: [],
}

