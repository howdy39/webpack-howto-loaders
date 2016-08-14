module.exports = {
  entry: './example.js',
  output: {
    filename: 'output.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'} // ケース1 .babelrc
      // {test: /\.js$/, loader: 'babel?presets[]=es2015'} // ケース2 クエリオプション
    ]
  }
  // ,babel: {presets: ['es2015']} // ケース3 グローバルオプション
}
