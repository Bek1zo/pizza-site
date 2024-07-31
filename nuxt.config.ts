// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "~": "/<srcDir>",
    "@": "/<srcDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    "assets": "/<srcDir>/assets",
    "public": "/<srcDir>/public"
  },
  css: ['/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "vue3-carousel-nuxt"],
  carousel: {
    prefix: 'Vue'
  }
})