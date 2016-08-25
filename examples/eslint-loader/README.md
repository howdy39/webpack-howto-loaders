## [eslint-loader](https://github.com/MoOx/eslint-loader)
eslintをかませるためのLoader

eslint自体はこちらの記事がとても良いです。[ESLint 最初の一歩](http://qiita.com/mysticatea/items/f523dab04a25f617c87d)

※筆者の観測範囲ではeslint-loaderを使うより、package.jsonにlintを定義しておいて`npm run lint`でeslintを実行するケースが多いです。

### インストール

```console
npm install eslint-loader eslint --save-dev
```

### example.js

```javascript:example.js
var cats = require('./cats.js');
console.log(cats);
```

### cats.js

```javascript:cats.js
module.exports = function() {
  return ["tama", "kuro", "tora"]
};
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
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
    ]
  }
}
```

### 実行&実行結果

セミコロンを付け忘れているのでエラーが出力されます。

```console
webpack

Hash: 1cf2bb388f2016f619c0
Version: webpack 1.13.1
Time: 1207ms
    Asset     Size  Chunks             Chunk Names
output.js  1.59 kB       0  [emitted]  main
    + 2 hidden modules

ERROR in ./cats.js

./cats.js
  2:34  error  Missing semicolon  semi

✖ 1 problem (1 error, 0 warnings)
```