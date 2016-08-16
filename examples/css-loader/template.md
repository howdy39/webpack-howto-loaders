## [css-loader](https://github.com/webpack/css-loader)
cssファイルを読み込むためのLoader
 
style-loaderと組み合わせてweb画面に反映。
url-loaderやfile-loaderと組み合わせてcss内のurl()に対応可能。


### インストール

```console
npm install --save-dev css-loader style-loader url-loader file-loader
```

### example.js

```javascript:example.js
{{example.js}}
```

### example.css

```css:example.css
{{example.css}}
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

**puppyはurl-loaderを通しているのでインラインイメージ**
![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/css-loader/capture/cap1.png)

**kittenはfile-loaderを通しているのでファイルが出力されている**
![cap2](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/css-loader/capture/cap2.png)