const { resolve } = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': resolve(__dirname, 'src/components/'),
      '@assets': resolve(__dirname, 'src/assets/'),
      '@pages': resolve(__dirname, 'src/pages/'),
    },
  },
}
