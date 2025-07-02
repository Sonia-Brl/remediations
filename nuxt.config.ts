// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxt/ui','@nuxt/content'],
  colorMode: {
    classSuffix: ''
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 2,
          searchDepth: 2
        }
      }
    }
  }
})
