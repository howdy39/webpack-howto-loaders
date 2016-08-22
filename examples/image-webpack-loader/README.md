## [image-webpack-loader-loader](https://github.com/tcoopman/image-webpack-loader)
画像ファイル（PNG, JPEG, GIF and SVG）を圧縮するためのLoader

url-loaderやfile-loaderと組み合わせて使うのが基本になる。  
bypassOnDebugにtrueを指定することでwebpackがdebugモードの場合に圧縮をしない事が可能。

### インストール

```console
npm install image-webpack-loader url-loader --save-dev
```

### example.js

```javascript:example.js
var puppy1 = require('url?limit=80000&name=puppy1.png!image-webpack?!./image/puppy.png');
document.getElementById('puppy1').src = puppy1;

var puppy2 = require('url?limit=70000&name=puppy2.png!image-webpack!./image/puppy.png');
document.getElementById('puppy2').src = puppy2;

var puppy3 = require('file?name=puppy3.png!image-webpack!./image/puppy.png');
document.getElementById('puppy3').src = puppy3;

var puppy4 = require('file?name=puppy4.png!image-webpack?bypassOnDebug=true!./image/puppy.png');
document.getElementById('puppy4').src = puppy4;
```

### example.html

```html:example.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
    <style>
      img {
        width: 300px;
      }
    </style>
  </head>
  <body>
    <h1>puppy1</h1>
    <img src="" id="puppy1"></img>
    <h1>puppy2</h1>
    <img src="" id="puppy2"></img>
    <h1>puppy3</h1>
    <img src="" id="puppy3"></img>
    <h1>puppy4</h1>
    <img src="" id="puppy4"></img>
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
      // {test: /\.png$/, loader: 'image-webpack'} // 検証のため直接requireの方に記載
    ]
  },
  debug: true
}
```

### 実行結果

puppy1.pngはlimit以下になり、インラインイメージになるため画像としては出力されない。

```console 
ls -la dist/ | grep png
-rw-r--r--   1 howdy  staff   78484  8 21 22:33 puppy2.png
-rw-r--r--   1 howdy  staff   78484  8 21 22:33 puppy3.png
-rw-r--r--   1 howdy  staff  237959  8 21 22:33 puppy4.png
```
