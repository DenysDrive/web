/* eslint-env node */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')
const envparser = require('./envparser.js');
const {Dialog} = require("quasar");

module.exports = configure(function (ctx) {
  return {
    boot: [
      'axios'
    ],
    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      env: envparser(),
      vueRouterMode: 'history'
    },

    devServer: {
      server: {
        type: 'http',
      },
      port: 8090,
      open: false,
      proxy: {
        '/api': {
          target: process.env.APP_DOMAIN_URL,
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/api': '',
          },
          proxyTimeout: 1000 * 60 * 10,
          timeout: 1000 * 60 * 10,
        },
      },

    },

    framework: {
      config: {
        primary: '#878ce7',
      },
      plugins: ['Dialog', 'Notify']
    },

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: [
        'render' // keep this as last one
      ]
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      useCredentialsForManifestTag: false,
      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Project`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/ddrive-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
      },
    },
  }
})
