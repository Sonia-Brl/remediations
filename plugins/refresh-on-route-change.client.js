export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.afterEach((to, from) => {
    // Rafraîchir seulement si on change vraiment de page
    if (to.path !== from.path) {
      // Option 1: Rafraîchissement complet
      window.location.reload()
      
      // Option 2: Rafraîchissement Nuxt (plus doux)
      // await nuxtApp.runWithContext(() => refreshCookie())
      // await nuxtApp.runWithContext(() => clearNuxtData())
    }
  })
})
