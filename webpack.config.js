module.exports = {
  entry:  './src/js/main.js',
  output: {
    path:     'dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:   /\.js/,
        loader: 'babel',
        include: __dirname + '/src/js'
      },
      {
        test: /\.scss/,
        loaders: ["style", "css", "sass"],
        include: __dirname + '/src/style'
      }
    ]
  }
};