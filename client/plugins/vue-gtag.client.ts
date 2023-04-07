import VueGtag, { trackRouter } from 'vue-gtag-next'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: [
      {
        id: 'G-3Z5HQV4NYL',
      },
      { id: 'GTM-K64MD78' },
    ],
    isEnabled: true,
  })
  trackRouter(useRouter())
})
