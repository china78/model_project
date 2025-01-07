module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propsist: ['*'],
      exclude: /node_modules/i,
    }
  }
}