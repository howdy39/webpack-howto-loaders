var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css', 'postcss'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  postcss: function () {
      return [
        require('autoprefixer')
      ];
  }
}
