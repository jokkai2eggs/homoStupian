import VueGtag, { trackRouter } from 'vue-gtag-next'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: [
      {
        id: 'G-3Z5HQV4NYL',
      },
    ],
    isEnabled: true,
  })
  trackRouter(useRouter())
})
