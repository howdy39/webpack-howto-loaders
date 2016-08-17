## [style-loader](https://github.com/webpack/style-loader)
styleを読み込むためのLoader

css-loaderとセットで使う。

使い方が2パターンあり。
後者だとスタイル適用のオンオフを切り替えることが出来る。

1. style!を指定
1. style/useable!を指定

### インストール

```console
npm install style-loader css-loader --save-dev 
```

### example.js

```javascript:example.js
// そのまま画面に適用するパターン
require('style!./use.css');

// スタイルの適用を切り替えるパターン（デフォルトはオフ）
var style = require('style/useable!./useable.css');
document.getElementById('use').addEventListener('click', function(e) {
  style.use();
});
document.getElementById('unuse').addEventListener('click', function(e) {
  style.unuse();
});
```

### use.css

```css:use.css
body { background: lightblue; }
```

### useable.css

```css:useable.css
body { background: lightcoral; }
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
    <button id="use">スタイルを適用</button>
    <button id="unuse">スタイルを外す</button>
  <script type="text/javascript" src="output.js"></script></body>
</html>
```

### webpack.config.js

```javascript:webpack.config.js
module.exports = {
  entry: './example.js',
  output: {
    filename: 'output.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'css'}
    ]
  }
}
```

### 実行&実行結果

**初期状態**
![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/style-loader/capture/cap1.png)

**スタイルを適用**
![cap2](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/style-loader/capture/cap2.png)

**スタイルを外す**
![cap3](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/style-loader/capture/cap3.png)