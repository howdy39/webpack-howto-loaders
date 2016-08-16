module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\puppy.jpg$/, loader: 'url'},
      {test: /\kitten.jpg$/, loader: 'file'}
    ]
  }
}
