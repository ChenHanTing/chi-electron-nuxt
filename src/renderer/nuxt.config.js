const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - 畢業快樂',
    title: '畢業DVD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    head: {
      title: '畢業DVD',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:title'  , property: 'og:title', content: '畢業DVD' },
        { hid: 'description', name: 'description', content: '畢業光碟' },
        { hid: 'og:description', property: 'og:description', content: '畢業光碟' },
        { hid: 'og:type' , property: 'og:type' , content: 'website'},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/bootstrap/bootstrap.min.css' }
      ]
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/mixins/base.css',
    '~/assets/mixins/font.css',
    '~/assets/mixins/anime.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  dev: isDev,
  router: {
    mode: 'hash',
  },
  build: {
    extend(config) {
      if (!isDev) {
        // absolute path to files on production (default value: '/_nuxt/')
        config.output.publicPath = '_nuxt/'
      }
      config.node = {
        __dirname: !isProduction,
        __filename: !isProduction,
      }
    },
  },
  generate: {
    dir: '../../dist/nuxt-build',
  },
  telemetry: false,
}
