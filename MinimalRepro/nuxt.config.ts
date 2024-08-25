// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-open-fetch'],
  openFetch: {
    openAPITS: {
      enum: true,
    },
    clients: {
      petsApi: {
        schema: 'https://petstore3.swagger.io/api/v3/openapi.json',
        baseURL: 'https://petstore3.swagger.io/api/v3/'
      }
    }
  }
})
