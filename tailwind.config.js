/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './node_modules/flowbite/**/*.js',
    "./nuxt.config.{js,ts}",
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
        'one': '#FF6900',
        primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d","950":"#052e16"}
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

