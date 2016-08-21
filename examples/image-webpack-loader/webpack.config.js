module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      // {test: /\.png$/, loader: 'image-webpack'} // 検証のため直接requireの方に記載
    ]
  },
  debug: true
}
