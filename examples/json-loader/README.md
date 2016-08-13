## [json-loader](https://github.com/webpack/json-loader)
jsonファイルを読み込むためのLoader

### example.js

```javascript:example.js
var cats = require('./cats.js');
console.log(cats);
```

### cats.js

```javascript:cats.js
var cats = ['tama', 'kuro', 'tora']
module.exports = cats;
```

### webpack.config.js

```javascript:webpack.config.js
module.exports = {
  entry: './example.js',
  output: {
    filename: 'output.js'
  }
}
```

### 実行&実行結果

```console:実行&実行結果 
node output.js
[ 'tama', 'kuro', 'tora' ]
```
