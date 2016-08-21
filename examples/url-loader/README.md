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
var puppy1 = require('url!./image/puppy.jpg'); // インラインイメージ
document.getElementById('puppy1').src = puppy1;

var puppy2 = require('url?limit=1000!./image/puppy.jpg'); // 外部ファイル（ハッシュがファイル名）
document.getElementById('puppy2').src = puppy2;

var puppy3 = require('url?limit=1000&name=picture.png!./image/puppy.jpg'); // 外部ファイル（ファイル名を指定）
document.getElementById('puppy3').src = puppy3;
```

### example.html

```html:example.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
  </head>
  <body>
    <h1>puppy1</h1>
    <img src="" id="puppy1"></img>
    <h1>puppy2</h1>
    <img src="" id="puppy2"></img>
    <h1>puppy3</h1>
    <img src="" id="puppy3"></img>
    <script type="text/javascript" src="./dist/output.js"></script>
  </body>
</html>
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
    loaders: [
      // {test: /\.jpg$/, loader: 'url'} // 検証のため直接requireの方に記載
    ]
  }
}
```

### 実行&実行結果

puppy1はlimit指定なしなのでインラインイメージ  
puppy2はlimitを超えているのでファイル  
puppy3はlimitを超えているかつ名前を指定しているので指定された名前のファイル  
![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/url-loader/capture/cap1.png)
