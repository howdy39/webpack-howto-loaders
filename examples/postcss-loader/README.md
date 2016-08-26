## [postcss-loader]()
postcssを通すためのLoader

postcss-loaderはcssへの変換を行います。  
そのためcss-loaderとセットで使います。  

**使用例**  
`require('postcss!./example.css')`の形だとrequireできずにエラーになります。  
`require('style!css!postcss!./example.css')`の形で画面に適用させるか  
`require('css!postcss!./example.css')`の形で`extract-text-webpack-plugin`と併用してcssファイルを出力するかのいずれかになると思います。

### インストール

```console
npm install postcss-loader css-loader autoprefixer extract-text-webpack-plugin --save-dev
```

### example.js

```javascript:example.js
require('./example.css');
```

### webpack.config.js

```javascript:webpack.config.js
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
```

### 実行&実行結果

```css:styles.css
body {
  border-radius: 4px;
}

div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```