const withImages = require('next-images')
const path = require('path')
const withPlugins = require('next-compose-plugins')

const i18nPlugin = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },
  localePath: path.resolve('./src/translations')
}

const imagePlugin = withImages({
  esModule: true
})

module.exports = withPlugins([i18nPlugin, imagePlugin])

