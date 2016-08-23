module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/',
    chunkFilename: '[name].output.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
