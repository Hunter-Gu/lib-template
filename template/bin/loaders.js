exports.getJsLoaders = function (cacheDir = true) {
  return {
    test: /\.jsx?$/,
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: cacheDir
      },
    }],
    exclude: /node_modules/
  }
}

exports.getEslintLoader = function() {
  return {
    test: /\.(jsx?|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    exclude: /node_modules/,
    options: {
      formatter: 'codeframe'
    }
  }
}
