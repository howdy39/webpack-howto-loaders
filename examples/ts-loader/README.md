## [ts-loader](s://github.com/TypeStrong/ts-loader)
TypeScriptファイルを読み込むためのLoader

tsconfig.jsonは必須。
ない場合、ts-loaderの内部でエラーになります。

```console
Module build failed: TypeError: Path must be a string. Received undefined
```

### インストール

```console
npm install --save-dev ts-loader typescript
```

### example.js

```javascript:example.js
var Cat = require('./cat.ts');
var cats = new Cat().getCats(); 
console.log(cats);
```

### cats.ts

```TypeScript:cat.ts
class Cat {
  private cats: string[];
  constructor() {
    this.cats = ["tama", "kuro", "tora"];
  }
  public getCats() {
    return this.cats;
  }
}
export = Cat;
```

### tsconfig.json

```json:tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true
  }
}
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
      {test: /\.ts$/, loader: 'ts'}
    ]
  }
}
```

### 実行&実行結果

```console 
node output.js
[ 'tama', 'kuro', 'tora' ]
```
