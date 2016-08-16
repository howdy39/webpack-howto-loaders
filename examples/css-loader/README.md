## [css-loader](https://github.com/webpack/css-loader)
cssファイルを読み込むためのLoader
 
style-loaderと組み合わせてweb画面に反映。
url-loaderやfile-loaderと組み合わせてcss内のurl()に対応可能。


### インストール

```console
npm install --save-dev css-loader style-loader url-loader file-loader
```

### example.js

```javascript:example.js
require('./example.css');
```

### example.css

```css:example.css
div {
  width: 300px;
  height: 300px;
  color: blue;
}
.puppy {
  background-image: url("./image/puppy.jpg")
}
.kitten {
  background-image: url("./image/kitten.jpg")
}
```

### example.html

```html:example.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
  </head>
  <body>
    <div class="puppy">puppy</div>
    <div class="kitten">kitten</div>
    <script type="text/javascript" src="./dist/output.js"></script>
  </body>
</html>
```

### webpack.config.js

```javascript:webpack.config.js
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
```

### 実行&実行結果

**puppyはurl-loaderを通しているのでインラインイメージ**
![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/css-loader/capture/cap1.png)

**kittenはfile-loaderを通しているのでファイルが出力されている**
![cap2](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/css-loader/capture/cap1.png)