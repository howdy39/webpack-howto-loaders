module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
    ]
  }
}
