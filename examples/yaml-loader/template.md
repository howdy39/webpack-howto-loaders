## [yaml-loader](https://github.com/okonet/yaml-loader)
ymlファイルを読み込むためのLoader

ymlからjsonファイルへの変換なのでjson-loaderと組み合わせる必要があります。

### インストール

```console
npm install yaml-loader json-loader --save-dev 
```

### example.js

```javascript:example.js
{{example.js}}
```

### cats.yml

```yml:cats.yml
{{cats.yml}}
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
