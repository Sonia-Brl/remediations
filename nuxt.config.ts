// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    logLevel: 4, // Mode debug complet
    prerender: {
      failOnError: false
    }
  },
  modules: ['@nuxt/ui','@nuxt/content','@nuxt/icon'],
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
