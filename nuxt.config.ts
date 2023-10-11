export default defineNuxtConfig({
  // @ts-ignore
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/styles/common.css'],
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' }]
    }
  },
  devServer: {
    host: 'localhost',
    port: 4000
  }
})
