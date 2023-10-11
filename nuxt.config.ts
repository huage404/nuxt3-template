export default defineNuxtConfig({
  // @ts-ignore
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  devServer: {
    host: 'localhost',
    port: 4000
  }
})
