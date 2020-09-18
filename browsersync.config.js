require('dotenv').config()

module.exports = {
  open: true,
  proxy: process.env.BROWSERSYNC_PROXY || '127.0.0.1:8080',
  serveStatic: ['.'],
  files: ['./**/*.html', './dist/**/*.css'],
  watchOptions: {
    ignoreInitial: true,
    ignored: ['node_modules'],
  },
}
