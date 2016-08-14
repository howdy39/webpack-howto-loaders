## [babel-loader](https://github.com/babel/babel-loader)
babelファイルを読み込むためのLoader

babelへのオプションは３種類の渡し方がある。
基本的に.babelrcを使ったほうがwebpackへの依存が少なくて良い気がする。

1. .babelrc
1. クエリオプション
1. グローバルオプション

### インストール

```console
npm install --save-dev babel-loader babel-core babel-preset-es2015
```

### example.js

```javascript:example.js
{{example.js}}
```

### cat.js

```javascript:cat.js
{{cat.js}}
```

### .babelrc

```.babelrc
{{.babelrc}}
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
