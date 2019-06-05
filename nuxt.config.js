const nodeExternals = require('webpack-node-externals');

module.exports = {
  /*
  ** Headers of the page
  */
 generate: {
   routes: [
     'listing/Bungalow',
     'listing/Pipe-Room',
     'listing/Luxury-Tent',
     'listing/Khmer-Cottage',
     'listing/Villa-Suite',
     'listing/Villa-Jasmine',
     'listing/Camping',
   ]

 },
 css: [
  '~/assets/main.css'
  ],
  head: {
    title: 'vKirirom Pine Resort - Cambodia Resorts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vKirirom Pine Resort located on top of kirirom mountain national park provides you once in a life time experiences. A lot of activities in the fresh air like Jungle trekking, horse riding, fruit picking, team building for corporation as well with new creative delicious cuisine contains organic vegetable from own farm.' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/offline-js/0.7.19/offline.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/offline-js/0.7.19/themes/offline-theme-chrome.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/offline-js/0.7.19/themes/offline-language-english.min.css',
      },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' },
    ],
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vue-resource.js',
    {
      src: '~/plugins/datepicker.js',
      ssr: false,
    },
    {
      src: '~/plugins/slick.js',
      ssr: false,
    },
    {
      src: '~/plugins/icons.js',
      ssr: false,
    },
  ],
  css: [
    '~/assets/style/app.styl',
    { src: '~assets/style/scss/base.scss', lang: 'scss' },
  ],
  modules: [
    ['@nuxtjs/google-tag-manager', 
      {
      id: 'GTM-PMXGLXR',
      layer: 'dataLayer',
      pageTracking: true,
      dev: true, // set to false to disable in dev mode
      query: {
          // query params...
          gtm_auth:        '...',
          gtm_preview:     '...',
          gtm_cookies_win: '...'
        },
      }
    ]
    // ['@nuxtjs/google-gtag',
    //   {
    //     id: 'UA-137980458-1',
    //     config: {
    //       anonymize_ip: true, // anonymize IP
    //       send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    //     },
    //     debug: true, // enable to track in dev mode
    //     disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    //   },
    // ],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-slick'],
    extractCSS: true,
    vendor: ['axios', 'vuetify', 'vue-slick'],
    extend(config, ctx) {
      // // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //   });
      // }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/],
          }),
        ];
      }
    },
  },
  configureWebpack: (config) => {
    config.output.globalObject = 'this';
  },
};
