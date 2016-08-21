## [image-webpack-loader-loader](https://github.com/tcoopman/image-webpack-loader)
画像ファイル（PNG, JPEG, GIF and SVG）を圧縮するためのLoader

url-loaderやfile-loaderと組み合わせて使うのが基本になる。  
bypassOnDebugにtrueを指定することでwebpackがdebugモードの場合に圧縮をしない事が可能。

### インストール

```console
npm install image-webpack-loader --save-dev
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

### 実行結果

puppy1.pngはlimit以下になり、インラインイメージになるため画像としては出力されない。

```console 
ls -la dist/ | grep png
-rw-r--r--   1 howdy  staff   78484  8 21 22:33 puppy2.png
-rw-r--r--   1 howdy  staff   78484  8 21 22:33 puppy3.png
-rw-r--r--   1 howdy  staff  237959  8 21 22:33 puppy4.png
```
