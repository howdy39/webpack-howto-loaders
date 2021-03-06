## [json-loader](https://github.com/webpack/json-loader)
jsonファイルを読み込むためのLoader

### インストール

```console
npm install json-loader --save-dev 
```

### example.js

```javascript:example.js
var cats = require('./cats.json');
console.log(cats);
```

### cats.json

```json:cats.json
["tama", "kuro", "tora"]
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
      {test: /\.json$/, loader: 'json'}
    ]
  }
}
```

### 実行&実行結果

```console 
node output.js
[ 'tama', 'kuro', 'tora' ]
```
