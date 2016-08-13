## [yaml-loader](https://github.com/okonet/yaml-loader)
ymlファイルを読み込むためのLoader

ymlからjsonファイルへの変換なのでjson-loaderと組み合わせる必要があります。

### インストール

```console
npm install --save-dev yaml-loader json-loader
```

### example.js

```javascript:example.js
var cats = require('./cats.yml');
console.log(cats);
```

### cats.yml

```yml:cats.yml
[tama, kuro, tora]
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
      {test: /\.yml$/, loader: 'json!yaml'}
    ]
  }
}
```

### 実行&実行結果

```console 
node output.js
[ 'tama', 'kuro', 'tora' ]
```
