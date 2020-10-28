export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'es'
    },
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
  plugins: ['@/plugins/vue-tooltips.js'],
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
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-shades-of-purple.css'
      }
    }
  },
  build: {
    extend(config, { isClient }) {
      const isProd = process.env.NODE_ENV === 'production';
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856; // 244 Kib
      }
    }
  },
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
