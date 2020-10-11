export default {
  target: 'static',
  head: {
    title: 'Michiwoo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal web and blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {},
  build: {},
  tailwindcss: {
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  }
}
