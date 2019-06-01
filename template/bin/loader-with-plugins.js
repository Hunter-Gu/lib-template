exports.getTsLoaderWithPlugins = function () {
  const { CheckerPlugin } = require('awesome-typescript-loader')

  return {
    loaders: {
      test: /\.tsx?$/,
      use: [{
        loader: 'awesome-typescript-loader'
      }]
    },
    plugins: [new CheckerPlugin()]
  }
}
