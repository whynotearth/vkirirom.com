module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vKirirom Pine Resort - Cambodia Resorts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vKirirom Pine Resort located on top of kirirom mountain national park provides you once in a life time experiences. A lot of activities in the fresh air like Jungle trekking, horse riding, fruit picking, team building for corporation as well with new creative delicious cuisine contains organic vegetable from own farm.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
    ],
  },
  plugins: [
    '~/plugins/vuetify.js',
    // '~/plugins/airbnbDatePicker.js',
    // '~/plugins/filestack.js',
    {
      src: '~/plugins/airbnbDatePicker.js',
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
    extractCSS: true,
    vendor: ['axios', 'vuetify', 'airbnbDatePicker', 'vue-slick'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  configureWebpack: (config) => {
    config.output.globalObject = 'this';
  },
};
