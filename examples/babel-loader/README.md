## [babel-loader](https://github.com/babel/babel-loader)
babelファイルを読み込むためのLoader

babelへのオプションは３種類の渡し方がある。
基本的に.babelrcを使ったほうがwebpackへの依存が少なくて良い気がする。

1. .babelrc
1. クエリオプション
1. グローバルオプション

### インストール

```console
npm install babel-loader babel-core babel-preset-es2015 --save-dev 
```

### example.js

```javascript:example.js
var Cat = require('./cat.js');
var cats = new Cat().getCats(); 
console.log(cats);
```

### cat.js

```javascript:cat.js
class Cat {
  constructor() {
    this.cats = ["tama", "kuro", "tora"];
  }
  getCats() {
    return this.cats;
  }
}
module.exports = Cat;
```

### .babelrc

```.babelrc
{ "presets": ["es2015"] }
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
      {test: /\.js$/, loader: 'babel'} // ケース1 .babelrc
      // {test: /\.js$/, loader: 'babel?presets[]=es2015'} // ケース2 クエリオプション
    ]
  }
  // ,babel: {presets: ['es2015']} // ケース3 グローバルオプション
}
```

### 実行&実行結果

```console 
node output.js
[ 'tama', 'kuro', 'tora' ]
```
