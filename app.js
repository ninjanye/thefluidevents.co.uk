const axis = require('axis')
const rupture = require('rupture')
const autoprefixer = require('autoprefixer-stylus')

module.exports = {
  ignore: ['**/layout.pug', '**/_*', '**/.*', '_cache/**', 'readme.md', 'test/**', 'yarn.lock'],
  entry: { 'js/main': ['./assets/js/index.coffee'] },
  matchers: {
    html: '*(**/)*.pug',
    css: '*(**/)*.styl',
    js: '**/*.coffee'
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [{
        loader: 'stylus-loader',
        options: {
          use: [axis(), rupture(), autoprefixer({
            browsers: 'defaults, last 4 versions, last 6 iOS versions, last 6 Android versions, last 6 Safari versions, last 2 ie versions'
          })]
        }
      }]
    }, {
      test: /\.pug$/,
      use: [{
        loader: 'pug-static-loader',
        options: {
          pretty: false
        }
      }]
    }, {
      test: /\.coffee$/,
      use: [{ loader: 'coffee-loader' }]
    }]
  },
  resolve: { extensions: ['.coffee', '.js', '.tff'] }
}
