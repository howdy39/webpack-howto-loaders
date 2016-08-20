## [url-loader](https://github.com/webpack/url-loader)
画像ファイルを読み込みインラインイメージを使うか外部ファイルを使うかを分岐させるためのLoader

小さい画像をインラインイメージにすることで描画の高速化を図る事が可能。    
limitパラメータで閾値のバイト数を設定する。
閾値を超えた場合の外部ファイル出力はfile-loaderを呼んでいるためnameパラメータが使用可能。

### インストール

```console
npm install url-loader --save-dev
```

### example.js

```javascript:example.js
{{example.js}}
```

### example.html

```html:example.html
{{example.html}}
```

### webpack.config.js

```javascript:webpack.config.js
{{webpack.config.js}}
```

### 実行&実行結果

puppy1はlimit指定なしなのでインラインイメージ  
puppy2はlimitを超えているのでファイル  
puppy3はlimitを超えているかつ名前を指定しているので指定された名前のファイル  
![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/url-loader/capture/cap1.png)
