import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import config from './src/config/index'

export default defineNuxtConfig({
  // @ts-ignore
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@vite-pwa/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/styles/common.css'],
  pwa: {
    // 如果你想在 start_url 中自定义一些参数，那么你不应该在这里设置 manifest
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      skipWaiting: true,
      clientsClaim: true
    },
    registerWebManifestInRouteRules: true,
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  app: {
    head: {
      title: config.name,
      meta: [
          { name: 'viewport', content: 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
          { name: 'description', content: config.description },
          { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/pwa/apple-touch-icon-180x180.png', sizes: '180x180' },
        { rel: 'mask-icon', href: '/pwa/maskable-icon-512x512.png', color: '#FFFFFF' },
      ]
    }
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  },
  devServer: {
    host: 'localhost',
    port: 4000
  }
})
