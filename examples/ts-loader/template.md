## [ts-loader](https://github.com/TypeStrong/ts-loader)
TypeScriptファイルを読み込むためのLoader

tsconfig.jsonは必須。
ない場合、ts-loaderの内部でエラーになります。

```console
Module build failed: TypeError: Path must be a string. Received undefined
```

### インストール

```console
npm install ts-loader typescript --save-dev 
```

### example.js

```javascript:example.js
{{example.js}}
```

### cats.ts

```TypeScript:cat.ts
{{cat.ts}}
```

### tsconfig.json

```json:tsconfig.json
{{tsconfig.json}}
```

### webpack.config.js

```javascript:webpack.config.js
{{webpack.config.js}}
```

### 実行&実行結果

```console 
node output.js
[ 'tama', 'kuro', 'tora' ]
```
