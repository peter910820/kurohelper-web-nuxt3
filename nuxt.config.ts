import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL,
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    head: {
      title: 'KuroHelper-GalgameBot以及Galgame資料庫',
      meta: [
        { name: 'description', content: '由台灣玩家維護的GalgameBot以及Galgame資料庫' },
        { property: 'og:title', content: 'KuroHelper-GalgameBot以及Galgame資料庫' },
        { property: 'og:description', content: '由台灣玩家維護的GalgameBot以及Galgame資料庫' },
        // { property: "og:image", content: process.env.NUXT_PUBLIC_SITE_URL + "background.jpg" },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        // { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
        // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/wowjs@1.1.3/css/libs/animate.min.css" },
        // { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
        // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/wowjs@1.1.3/css/libs/animate.min.css" },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js', defer: true },
        { src: 'https://kit.fontawesome.com/8f1caa7fe1.js', crossorigin: 'anonymous', defer: true },
        // { src: "https://unpkg.com/cursor-effects@latest/dist/browser.js", defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js', tagPosition: 'bodyClose' },
      ],
    },
  },
});
