import VueGtag, { trackRouter } from 'vue-gtag-next'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: '',
    },
    isEnabled: true,
  })
  trackRouter(useRouter())
})
