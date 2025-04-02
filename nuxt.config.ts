// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  fileStorage: {
    mount: '/storage'
  },
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    'nuxt-file-storage',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/device'
  ]
})