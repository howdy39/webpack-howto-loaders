module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      // {test: /\.jpg$/, loader: 'url'} // 検証のため直接requireの方に記載
    ]
  }
}
