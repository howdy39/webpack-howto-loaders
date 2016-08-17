## [html-loader](https://github.com/webpack/html-loader)
htmlファイルを読み込むためのLoader

テンプレートHTMLを別ファイルに定義する時とかに使うとよさげ。

### インストール

```console
npm install html-loader --save-dev 
```

### example.js

```javascript:example.js
var cats = require('./cats.html');
console.log(cats);
```

### cats.html

```html:cats.html
<ul>
  <li>tama</li>
  <li>kuro</li>
  <li>tora</li>
</ul>
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
      {test: /\.html$/, loader: 'html'}
    ]
  }
}
```

### 実行&実行結果

```console 
node output.js
<ul>
  <li>tama</li>
  <li>kuro</li>
  <li>tora</li>
</ul>
```
